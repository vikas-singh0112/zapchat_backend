export interface IPaginationMeta {
	nextCursor: string | null;
	hasNextPage: boolean;
}

export class ApiResponse<T = unknown> {
	public statusCode: number;
	public message: string;
	public data?: T;
	public metaData?: IPaginationMeta;
	
	constructor(
		statusCode: number,
		data?: T,
		metaData?: IPaginationMeta,
		message: string = "success",
	) {
		this.statusCode = statusCode;
		this.message = message;
		this.data = data;
		this.metaData = metaData;
	}
	
	static ok<T>(
		data?: T,
		metaData?: IPaginationMeta,
		message: string = "Success",
	) {
		return new ApiResponse(200, data, metaData, message);
	}
	
	static created<T>(
		data?: T,
		metaData?: IPaginationMeta,
		message: string = "Created successfully",
	) {
		return new ApiResponse(201, data, metaData, message);
	}
	
	static noContent(message: string = "No content") {
		return new ApiResponse(204, undefined, undefined, message);
	}
}