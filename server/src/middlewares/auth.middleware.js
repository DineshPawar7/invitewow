import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const verifyJWT = asyncHandler(async (req, _, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        throw new ApiError(401, 'Unauthorized request: No token provided');
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decodedToken?._id).select('-password');

        if (!user) {
            throw new ApiError(401, 'Invalid Access Token');
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || 'Invalid Access Token');
    }
});

export const isPremium = asyncHandler(async (req, _, next) => {
    if (req.user?.role !== 'Premium' || req.user?.subscription?.status !== 'active') {
        throw new ApiError(403, 'Access denied. Premium subscription required.');
    }
    next();
});