import * as userService from "../services/userService.js";
import { successResponse, errorResponse } from "../utils/response.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();

    if (!users || users.length === 0) {
      return errorResponse(res, 404, "No users found");
    }

    return successResponse(res, 200, "Users fetched successfully", users);
  } catch (error) {
    return errorResponse(res, 500, "Internal server error", { error: error.message });
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return errorResponse(res, 400, "Invalid user ID");
    }

    const user = await userService.getUser(id);

    if (!user) {
      return errorResponse(res, 404, "User not found");
    }

    return successResponse(res, 200, "User fetched successfully", user);
  } catch (error) {
    return errorResponse(res, 500, "Internal server error", { error: error.message });
  }
};
