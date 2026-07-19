import {Elysia} from "elysia";
import {auth} from "../utils/auth";
import {ApiError} from "../utils/apiError";

export const BetterAuthPlugin = new Elysia({name: "better-auth"})
	.mount(auth.handler)
	.macro({
		auth: {
			async resolve({status, request: {headers}}) {
				const session = await auth.api.getSession({headers});
				if (!session) throw ApiError.unauthorized()
				return {
					user: session.user,
					session: session.session
				}
			}
		}
	})