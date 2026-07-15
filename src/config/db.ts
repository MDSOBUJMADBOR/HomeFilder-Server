import dotenv from "dotenv";
dotenv.config(); // ➔ ⚠️ এটি সবার ওপরে থাকা বাধ্যতামূলক যেন ইম্পোর্টের আগেই .env লোড হয়

import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.DATABASE_URL as string;

// 🛡️ সেফটি চেক: যদি কোনো কারণে .env ফাইল মিসিং থাকে, তবে স্পষ্ট এরর দেখাবে
if (!uri) {
  throw new Error("❌ Error: DATABASE_URL is not defined in your .env file!");
}

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true, 
  },
});

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1); // কানেকশন ফেইল হলে প্রসেস স্টপ করে দেবে
  }
};