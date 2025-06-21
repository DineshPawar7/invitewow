import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const cashfreeAPI = axios.create({
    baseURL: process.env.CASHFREE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'x-api-version': process.env.CASHFREE_API_VERSION,
        'x-client-id': process.env.CASHFREE_CLIENT_ID,
        'x-client-secret': process.env.CASHFREE_CLIENT_SECRET,
    }
});

/**
 * @param {number} amount
 * @param {string} customerId
 * @param {string} customerEmail
 * @param {string} customerPhone
 * @returns {Promise<object>}
 */
export const createCashfreeOrder = async ({ amount, customerId, customerEmail, customerPhone }) => {
    const orderId = `order_${uuidv4()}`;
    
    const payload = {
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
            customer_id: customerId,
            customer_email: customerEmail,
            customer_phone: customerPhone,
        },
        order_meta: {
            return_url: `${process.env.FRONTEND_RETURN_URL}?order_id={order_id}`
        }
    };

    try {
        const response = await cashfreeAPI.post('/orders', payload);
        return response.data;
    } catch (error) {
        console.error("Cashfree order creation failed:", error.response?.data || error.message);
        throw new Error("Failed to create payment order with Cashfree.");
    }
};

/**
 * @param {string} planId
 * @param {string} customerId
 * @param {string} customerEmail
 * @param {string} customerPhone
 * @returns {Promise<object>}
 */
export const createCashfreeSubscription = async ({ planId, customerId, customerEmail, customerPhone }) => {
    const subscriptionId = `sub_${uuidv4()}`;
    
    const payload = {
        subscription_id: subscriptionId,
        plan_id: planId,
        customer_details: {
            customer_id: customerId,
            customer_email: customerEmail,
            customer_phone: customerPhone,
        },
        subscription_meta: {
            return_url: `${process.env.FRONTEND_RETURN_URL}?subscription_id={subscription_id}`
        }
    };

    try {
        const response = await cashfreeAPI.post('/subscriptions', payload);
        return response.data;
    } catch (error) {
        console.error("Cashfree subscription creation failed:", error.response?.data || error.message);
        throw new Error("Failed to create subscription with Cashfree.");
    }
};


export const verifyWebhookSignature = (payload, signature) => {
   
    console.warn("Webhook signature verification is currently disabled. This is insecure for production.");
    return true; 
};