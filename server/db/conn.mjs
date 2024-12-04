import { MongoClient } from "mongodb";

const connectionString = process.env.MONGO_URI || "mongodb://mongo:27017";

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let conn;
try {
  console.log("Connecting to MongoDB...");
  conn = await client.connect();
} catch (e) {
  console.error("Failed to connect to MongoDB:", e);
}

let db = conn.db("sample_training");

export default db;
