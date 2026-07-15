import dotenv from "dotenv";
dotenv.config();

// ✅ FIX: NodeNext এর নিয়ম অনুযায়ী লোকাল ফাইলের শেষে .js এক্সটেনশন যুক্ত করা হয়েছে
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();