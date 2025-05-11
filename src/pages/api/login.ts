import { nanoid } from "nanoid"
import { SignJWT } from "jose"
import type { APIRoute } from "astro"

const TOKEN = import.meta.env.AUTH_SECRET

if (!TOKEN) {
	throw new Error("No token was found")
}

const secret = new TextEncoder().encode(TOKEN)

export const POST: APIRoute = async ctx => {
	try {
		const token = await new SignJWT({})
			.setProtectedHeader({ alg: "HS256" })
			.setJti(nanoid())
			.setIssuedAt()
			.setExpirationTime("10d")
			.sign(secret)

		ctx.cookies.set("token", token, {
			httpOnly: true,
			path: "/login",
			maxAge: 365 * 24 * 60 * 60 * 100,
		})

		return new Response(JSON.stringify({ message: "You're logged in!" }), {
			status: 200,
		})
	} catch (err) {
		console.debug(err)
		return new Response(JSON.stringify({ message: "Login failed" }), {
			status: 500,
		})
	}
}
