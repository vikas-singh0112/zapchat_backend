import {Elysia} from "elysia";
import {ApiResponse} from "../utils/apiResponse";

export const GlobalResponsePlugin = new Elysia({name: "global-response"})
	.mapResponse(({responseValue, set}) => {
		if (responseValue instanceof ApiResponse) {
			set.status = responseValue.statusCode;
			
			return Response.json({
				success: true,
				statusCode: responseValue.statusCode,
				message: responseValue.message,
				data: responseValue.data,
				metaData: responseValue.metaData,
			})
		}
		return responseValue as Response
	}).as("global")