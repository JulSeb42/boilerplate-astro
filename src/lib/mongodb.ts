import { MongoClient, type Db } from "mongodb"

if (!import.meta.env.MONGODB_URI) {
	throw new Error("Invalid env variable: MONGODB_URI")
}

const uri = import.meta.env.MONGODB_URI
const name = import.meta.env.MONGODB_NAME
const options = {}
let cachedMongo: Db

const connectToDb = async () => {
	const mongo = await new MongoClient(uri, options).connect()
	return mongo.db(name)
}

export const getDb = async () => {
	if (import.meta.env.NODE_ENV === "development") {
		// @ts-ignore
		if (!global._mongoConnection) {
			// @ts-ignore
			global._mongoConnection = await connectToDb()
			// @ts-ignore
			cachedMongo = global._mongoConnection
		}

		return cachedMongo
	}

	const mongo = await connectToDb()
	return mongo
}

export const Users = async () => {
	const db: Db = await getDb()
	return db.collection("users")
}
