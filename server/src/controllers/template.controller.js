import { Template } from '../models/template.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getAllTemplates = asyncHandler(async (req, res) => {
    const templates = await Template.find({});
    return res.status(200).json(
        new ApiResponse(200, templates, "Templates fetched successfully")
    );
});

export const getTemplateById = asyncHandler(async (req, res) => {
    const template = await Template.findById(req.params.id);
    if (!template) {
        throw new ApiError(404, "Template not found");
    }
    return res.status(200).json(
        new ApiResponse(200, template, "Template fetched successfully")
    );
});

export const seedTemplates = asyncHandler(async (req, res) => {
    await Template.deleteMany({});
    const sampleTemplates = [
        { name: "Classic Wedding Invite", category: "Wedding", price: 199, imageUrl: "/images/wedding1.jpg" },
        { name: "Modern Birthday Party", category: "Birthday", price: 149, imageUrl: "/images/birthday1.jpg" },
        { name: "Corporate Event Announcement", category: "Corporate", price: 249, imageUrl: "/images/corporate1.jpg" },
        { name: "Baby Shower Fun", category: "Baby Shower", price: 179, imageUrl: "/images/baby1.jpg" },
    ];
    await Template.insertMany(sampleTemplates);
    return res.status(201).json(new ApiResponse(201, {}, "Templates seeded successfully"));
});