import type {UserModel} from "./model";
import {ApiResponse} from "../../utils/apiResponse";
import {prisma} from "../../prisma/client";


export abstract class User {
	static async searchUser(
		{search, cursor, limit}: UserModel["searchUserQuery"],
		{id: currentUserId}: UserModel["currentUserId"]
	) {
		const searchUsers = await prisma.user.findMany({
			where: {
				id: {not: currentUserId},
				name: {startsWith: search, mode: "insensitive"}
			},
			select: {
				id: true,
				name: true,
				image: true
			},
			take: limit + 1,
			...(cursor && {
				skip: 1,
				cursor: {id: cursor}
			}),
			orderBy: {id: "asc"}
		});
		
		const hasNextPage = searchUsers.length > limit;
		
		const data = hasNextPage ? searchUsers.slice(0, limit) : searchUsers;
		
		const nextCursor = hasNextPage && data.length > 0 ? data[data.length - 1].id : null;
		
		
		return ApiResponse.ok(data, {nextCursor, hasNextPage}, "users search successful")
	}
	
	static async getUser() {
	}
}