import axios from "axios"
import { BASE_API_URL } from "data"

export const http = axios.create({
	baseURL: BASE_API_URL,
	headers: { "Content-Type": "application/json" },
})
