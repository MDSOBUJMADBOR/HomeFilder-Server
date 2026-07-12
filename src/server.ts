import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { connectDB, client } from "./config/db";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  const db = client.db(process.env.DATABASE_NAME);

  const userCollection = db.collection("user");
    const housepostCollection = db.collection("housepost");

  // GET
  app.get("/users", async (req, res) => {    
    const users = await userCollection.find().toArray();
      console.log(users,'users');
    res.json(users);
  });

 app.post("/housepost", async (req, res) => {
      const requestData = req.body;
      // console.log(requestData);
      const result = await housepostCollection.insertOne(requestData);      
      res.json(result); 
    });  
  


  
  
app.get("/", (req, res) => {
  res.send("Server is running fine!");
});



  app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`);
  });
};

startServer();