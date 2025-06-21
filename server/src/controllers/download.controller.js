import { Order } from '../models/order.model.js';
import { Template } from '../models/template.model.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { generateFile, deleteFileAfterDownload } from '../services/file.service.js';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

export const downloadForPremiumUser = asyncHandler(async (req, res) => {
    const { templateId } = req.params;
    const { format = 'pdf', customizationData = {} } = req.body;

    const template = await Template.findById(templateId);
    if (!template) {
        throw new ApiError(404, "Template not found");
    }

    const downloadInstanceId = uuidv4();

    const filePath = await generateFile(customizationData, format, downloadInstanceId);

    res.download(filePath, `invitewow-${template.name}.${format}`, (err) => {
        if (err) {
            console.error("Error sending file:", err);
        }
        deleteFileAfterDownload(filePath);
    });
});

export const downloadForSinglePurchase = asyncHandler(async (req, res) => {
    const { token } = req.params;
    if (!token) {
        throw new ApiError(400, "Download token is required.");
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new ApiError(401, "Invalid or expired download link.");
    }

    const order = await Order.findById(decoded.orderId).populate('templateId');
    
    if (!order || order.status !== 'PAID' || order.downloadToken !== token) {
        throw new ApiError(404, "Order not found or not paid.");
    }
    
    const { format = 'pdf' } = req.query;

    const filePath = await generateFile(order.customizationData, format, order._id.toString());
    
    res.download(filePath, `invitewow-${order.templateId.name}.${format}`, (err) => {
        if (err) {
            console.error("Error sending file:", err);
        }
        deleteFileAfterDownload(filePath);
    });
});