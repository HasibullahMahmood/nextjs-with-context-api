import { MongoClient } from 'mongodb';

export async function connectDatabase() {
	const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.4gnac.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

	const client = await MongoClient.connect(url);

	return client;
}

export async function insertDocument(client, collection, document) {
	const db = client.db();

	const result = await db.collection(collection).insertOne(document);

	return result;
}

export async function getAllDocuments(client, collection, sort) {
	const db = client.db();

	const documents = await db.collection(collection).find().sort(sort).toArray();

	return documents;
}
