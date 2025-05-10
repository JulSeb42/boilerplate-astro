import { Users } from "./mongodb"
import type { User } from "types"

export const getAllUsers = async () => {
	const users = await (await Users()).find({}).toArray()
	return users
}

export const getUser = async (id: string) => {
	const users = await (await Users()).find({}).toArray()
	// @ts-ignore
	const filteredUser = users.filter(filter => filter._id.toString() === id)[0]
	return filteredUser
}

export const createUser = async (newUser: User) => {
	const user = await (await Users()).insertOne(newUser)
	return user
}
