import { PATHS } from "./routes"
import type { NavLink } from "types"

export const navLinks: Array<NavLink> = [
	{ text: "Homepage", href: PATHS.ROOT },
	{ text: "Users", href: PATHS.USERS },
	{ text: "Login", href: PATHS.LOGIN },
	{ text: "Sign up", href: PATHS.SIGNUP },
]
