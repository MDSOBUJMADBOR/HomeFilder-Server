import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { connectDB, client } from "./config/db";
import { ObjectId } from "mongodb";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  const db = client.db(process.env.DATABASE_NAME);

  const userCollection = db.collection("user");
    const housepostCollection = db.collection("housepost");

  // admin
app.get("/housepost", async (req, res) => {
    const result = await housepostCollection.find().toArray();      
    res.json(result);
  });

  app.get("/user", async (req, res) => {    
    const result = await userCollection.find().toArray();      
    res.json(result);
  });

app.delete("/user/:id", async (req, res) => {
    const { id } = req.params;
    const result = await userCollection.deleteOne({ _id: new ObjectId(id) });
    res.json(result);
  });

app.patch("/user/:id", async (req, res) => {
    const { id } = req.params;
    const { role } = req.body;
    const result = await userCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { role } }
    );
    res.json(result);  
  })


app.patch("/housepost/:id", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;  
    const result = await housepostCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } }
    );
    res.json(result);
});

  




  //user
 app.post("/housepost", async (req, res) => {
      const requestData = req.body;
      // console.log(requestData);
      const result = await housepostCollection.insertOne(requestData);      
      res.json(result); 
    });  
  
app.get("/housepost/email/:email", async (req, res) => {
    const { email } = req.params;
    const result = await housepostCollection.find({ email }).toArray();
    res.json(result);
  });


app.delete("/housepost/:id", async (req, res) => {
    const { id } = req.params;
    const result = await housepostCollection.deleteOne({ _id: new ObjectId(id) });
    res.json(result);
  });

app.get("/housepost/published/four", async (req, res) => {
    const result = await housepostCollection.find({ status: "published" }).limit(4).toArray();
    res.json(result);
  });

app.get("/housepost/published", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  const pageNumber = Number(page);
  const limitNumber = Number(limit);

  const skip = (pageNumber - 1) * limitNumber;

  const result = await housepostCollection
    .find({ status: "published" })
    .skip(skip)
    .limit(limitNumber)
    .toArray();

  const total = await housepostCollection.countDocuments({
    status: "published",
  });

  const totalPage = Math.ceil(total / limitNumber);

  console.log({
    data: result,
    page: pageNumber,
    totalPage,
    total,
  });

  res.json({
    total,
    totalPage,
    page: pageNumber,
    limit: limitNumber,
    data: result,
  });
});
app.get("/housepost/published/:id", async (req, res) => {
  const id = req.params.id;
  const result = await housepostCollection.findOne({
    _id: new ObjectId(id),
    status: "published",
  });
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