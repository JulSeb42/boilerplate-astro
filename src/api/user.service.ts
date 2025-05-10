import { http } from "./http-common"
import { generateServerRoute } from "utils"
import type { SERVER_PATHS } from "data"
import type { ApiResponse, User } from "types"

type PATHS = keyof typeof SERVER_PATHS.USER

const generateRoute = (route: Exclude<PATHS, "ROOT">, id?: string) =>
	generateServerRoute("USER", route, id)

class UserService {
	allUsers = async (): ApiResponse<Array<User>> =>
		await http.get(generateRoute("ALL_USERS"))

	getUser = async (id: string): ApiResponse<User> =>
		await http.get(generateRoute("GET_USER", id))
}

export const userService = new UserService()
