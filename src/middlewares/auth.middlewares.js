import {User} from "../models/user.models.js";
import {ApiError} from "../utils/ApiError.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";


export const verifyJWT = asyncHandler(async (req, res, next) => {
    let token = req.cookies?.accessToken || req.headers?.authorization?.replace("Bearer ", "")

    if (!token) {
        throw new ApiError(401, "You are not logged in! Please log in to get access."); 
    }
    
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decoded._id).select("-password -refreshToken -emailVerificationToken -emailVerificationExpiry");
        if (!user) {
            throw new ApiError(401, "The user belonging to this token does no longer exist.");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, "Invalid token. Please log in again.");
    }
});