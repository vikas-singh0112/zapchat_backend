import {Elysia} from "elysia";
import {ApiError} from "../utils/apiError";

export const GlobalErrorPlugin = new Elysia({name: "global-error"})
	.onError(({code, error, set}) => {
		if (error instanceof ApiError) {
			set.status = error.statusCode;
			return {
				success: false,
				statusCode: error.statusCode,
				code: error.errorCode,
				message: error.message
			}
		}
		
		if (code === "VALIDATION") {
			set.status = 400;
			return {
				success: false,
				statusCode: 400,
				code: "VALIDATION_ERROR",
				message: error.message,
			};
		}
		
		if (code === "NOT_FOUND") {
			set.status = 404;
			return {
				success: false,
				statusCode: 404,
				code: "NOT_FOUND",
				message: "Route not found",
			};
		}
		
		console.error(error);
		set.status = 500;
		return {
			success: false,
			statusCode: 500,
			code: "INTERNAL_ERROR",
			message: "Internal server error",
		};
	}).as("global")