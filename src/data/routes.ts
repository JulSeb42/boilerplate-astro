export const PATHS = {
	ROOT: "/",
	LOGIN: "/login",
	SIGNUP: "/signup",
	THANK_YOU: "/signup/thank-you",
	USERS: "/users",
	USER: (id = ":id") => `/users/${id}`,
	/* Prepend new page - DO NOT REMOVE */
}
