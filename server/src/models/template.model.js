import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true }
}, { timestamps: true });

export const Template = mongoose.model('Template', templateSchema);