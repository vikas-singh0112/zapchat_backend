import {t, UnwrapSchema} from "elysia"

export const UserModel = {
	currentUserId: t.Object({
		id: t.String()
	}),
	
	searchUserQuery: t.Object({
		search: t.String({minLength: 1}),
		cursor: t.Optional(t.String()),
		limit: t.Number({default: 10, maximum:50})
	})
} as const

export type UserModel = {
	[k in keyof typeof UserModel]: UnwrapSchema<typeof UserModel[k]>
}