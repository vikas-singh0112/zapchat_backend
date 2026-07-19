import {Elysia} from "elysia";
import {BetterAuthPlugin} from "../../plugins/betterAuth.plugin";
import {UserModel} from "./model";
import {User} from "./service";
import {ApiResponse} from "../../utils/apiResponse";


export const users = new Elysia({prefix: "users"})
	.use(BetterAuthPlugin)
	.guard({auth: true})
	.get("/", async ({query, user}) => await User.searchUser(query, user), {
		query: UserModel.searchUserQuery,
		user: UserModel.currentUserId
	})