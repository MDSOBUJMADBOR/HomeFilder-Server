"use strict";
// import express from "express";
// import cors from "cors";
// import { client } from "./config/db";
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// app.use(cors());
// app.use(express.json());
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
// const db = client.db(process.env.DATABASE_NAME as string); // Database name
// const userCollection = db.collection("users");
// app.get("/users", async (req, res) => {
//     const result = await userCollection.find().toArray();
//     console.log(result,'result');
// res.json(result);
// })
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);
// export default app;
var express_1 = require("express");
var cors_1 = require("cors");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
exports.default = app;
