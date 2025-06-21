import { Template } from '../models/template.model.js';
import { Order } from '../models/order.model.js';
import { User } from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { createCashfreeOrder, createCashfreeSubscription, verifyWebhookSignature } from '../services/cashfree.service.js';
import jwt from 'jsonwebtoken';

export const createSinglePurchaseOrder = asyncHandler(async (req, res) => {
    const { templateId, customerEmail, customerPhone, customizationData } = req.body;

    if (!templateId || !customerEmail || !customerPhone) {
        throw new ApiError(400, "Template ID, email, and phone are required.");
    }

    const template = await Template.findById(templateId);
    if (!template) {
        throw new ApiError(404, "Template not found.");
    }

    const customerId = `guest_${Date.now()}`;
    
    const cashfreeOrder = await createCashfreeOrder({
        amount: template.price,
        customerId,
        customerEmail,
        customerPhone
    });
    
    await Order.create({
        templateId,
        amount: template.price,
        cashfreeOrderId: cashfreeOrder.order_id,
        status: 'PENDING',
        customizationData: customizationData || {}
    });

    return res.status(200).json(new ApiResponse(
        200,
        { payment_session_id: cashfreeOrder.payment_session_id },
        "Payment order created successfully. Redirect user to payment."
    ));
});

export const createPremiumSubscription = asyncHandler(async (req, res) => {
    const user = req.user;

    if (user.role === 'Premium' && user.subscription?.status === 'active') {
        throw new ApiError(400, "User already has an active subscription.");
    }
    
    const cashfreeSubscription = await createCashfreeSubscription({
        planId: process.env.CASHFREE_PREMIUM_PLAN_ID,
        customerId: user._id.toString(),
        customerEmail: user.email,
        customerPhone: "9999999999"
    });

    user.subscription = {
        subscriptionId: cashfreeSubscription.subscription_id,
        planId: process.env.CASHFREE_PREMIUM_PLAN_ID,
        status: 'pending'
    };
    await user.save({ validateBeforeSave: false });

    return res.status(200).json(new ApiResponse(
        200,
        { subscription_link: cashfreeSubscription.auth_link },
        "Subscription created successfully. Redirect user to complete payment."
    ));
});

export const handleCashfreeWebhook = asyncHandler(async (req, res) => {
    const signature = req.headers['x-webhook-signature'];
    const isVerified = verifyWebhookSignature(req.body, signature);
    
   
    const { data, event_time, type } = req.body;
    console.log(`Received webhook event: ${type}`);

    if (type === 'ORDER_PAID') {
        const cf_order = data.order;
        const order = await Order.findOne({ cashfreeOrderId: cf_order.order_id });
        if (order && order.status === 'PENDING') {
            order.status = 'PAID';
            order.paymentId = data.payment.cf_payment_id;
            
            const downloadToken = jwt.sign({ orderId: order._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
            order.downloadToken = downloadToken;
            order.downloadTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);
            
            await order.save();
            console.log(`Order ${order.cashfreeOrderId} marked as PAID.`);
        }
    } else if (type === 'SUBSCRIPTION_STATUS_UPDATE') {
        const cf_subscription = data.subscription;
        const user = await User.findOne({ "subscription.subscriptionId": cf_subscription.subscription_id });
        if (user) {
            user.subscription.status = cf_subscription.subscription_status;
            if(cf_subscription.subscription_status === 'active'){
                user.role = 'Premium';
            } else {
                user.role = 'Registered';
            }
            await user.save({ validateBeforeSave: false });
            console.log(`Subscription ${cf_subscription.subscription_id} for user ${user.email} updated to ${cf_subscription.subscription_status}.`);
        }
    }

    res.status(200).json({ status: "ok" });
});