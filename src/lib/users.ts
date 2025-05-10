import { Users } from "./mongodb"
import type { User } from "types"

export const getAllUsers = async () => {
	const users = await (await Users()).find({}).toArray()
	return users
}

export const createUser = async (newUser: Partial<User>) => {
	// @ts-ignore
	const user = await (await Users()).insert(newUser)
	return user
}
