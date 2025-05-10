import { createUser, getAllUsers } from "lib"

export const get = async () => {
	const users = getAllUsers()

	if (!users) {
		return new Response(null, {
			status: 404,
			statusText: "There are no users.",
		})
	}

	return new Response(JSON.stringify(users), { status: 200 })
}

export const post = async ({ request }: { request: Request }) => {
	const newUser = await request.json()
	const user = await createUser(newUser)

	return new Response(JSON.stringify(user), { status: 200 })
}
