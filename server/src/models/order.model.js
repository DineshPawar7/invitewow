import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    templateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Template', required: true },
    cashfreeOrderId: { type: String, required: true, unique: true },
    paymentId: { type: String },
    amount: { type: Number, required: true },
    status: {
        type: String,
        enum: ['PENDING', 'PAID', 'FAILED'],
        default: 'PENDING'
    },
    customizationData: { type: mongoose.Schema.Types.Mixed },
    downloadToken: { type: String },
    downloadTokenExpires: { type: Date }
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);