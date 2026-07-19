export class ApiError extends Error {
	public statusCode: number;
	public errorCode: string;
	
	constructor(message: string, statusCode: number = 500, errorCode: string = "INTERNAL_ERROR") {
		super(message);
		this.statusCode = statusCode;
		this.errorCode = errorCode;
		Object.setPrototypeOf(this, ApiError.prototype);
	}
	
	static badRequest(message = "Bad Request") {
		return new ApiError(message, 400, "BAD_REQUEST")
	}
	
	static unauthorized(message = "Unauthorized Access") {
		return new ApiError(message, 401, "UNAUTHORIZED")
	}
	
	static forbidden(message = "Forbidden") {
		return new ApiError(message, 403, "FORBIDDEN")
	}
	
	static notFound(message = "Resource Not Found") {
		return new ApiError(message, 404, "NOT_FOUND")
	}
	
	
	static conflict(message = "conflict") {
		return new ApiError(message, 409, "CONFLICT")
	}
	
	static internal(message = "Internal Server Error") {
		return new ApiError(message, 500, "INTERNAL_ERROR")
	}
}