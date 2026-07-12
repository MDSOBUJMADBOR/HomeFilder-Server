// import express from "express";
// import cors from "cors";
// import { client } from "./config/db";

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




import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

export default app;