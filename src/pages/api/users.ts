import bcrypt from "bcryptjs"
import { createUser, getAllUsers } from "lib"
import { COMMON_TEXTS } from "data"
import { emailRegex, passwordRegex } from "utils"
import type { User } from "types"

export const GET = async () => {
	const users = getAllUsers()

	if (!users) {
		return new Response(null, {
			status: 404,
			statusText: "There are no users.",
		})
	}

	return new Response(JSON.stringify(users), { status: 200 })
}

export const POST = async ({ request }: { request: Request }) => {
	const newUser: User = await request.json()
	const { email, password } = newUser

	const foundUser = (await getAllUsers()).filter(user => user.email === email)

	if (foundUser.length) {
		return new Response(COMMON_TEXTS.ERRORS.EMAIL_TAKEN, {
			status: 400,
			statusText: COMMON_TEXTS.ERRORS.EMAIL_TAKEN,
		})
	}

	if (!passwordRegex.test(password)) {
		return new Response(COMMON_TEXTS.ERRORS.PASSWORD_NOT_VALID, {
			status: 400,
		})
	}

	const salt = bcrypt.genSaltSync(10)
	const hashedPassword = bcrypt.hashSync(password, salt)

	const user = await createUser({
		...newUser,
		email,
		password: hashedPassword,
	})

	return new Response(JSON.stringify(user), { status: 200 })

	// const newUser = await request.json()
	// const user = await createUser(newUser)

	// return new Response(JSON.stringify(user), { status: 200 })
}
