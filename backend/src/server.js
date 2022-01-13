import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import path from "path";

// we installed mongoDB so we dont need this constant anymore
// const articlesInfo = {
//   "learn-react": {
//     upvotes: 0,
//     comments: [],
//   },
//   "learn-node": {
//     upvotes: 0,
//     comments: [],
//   },
//   "my-thoughts-on-resumes": {
//     upvotes: 0,
//     comments: [],
//   },
// };

const app = express();

app.use(express.static(path.join(__dirname, "/build"))); // this is the path to the build folder

app.use(bodyParser.json());

app.get("/api/articles/:name", async (req, res) => {
  try {
    const articleName = req.params.name; // get article name from url
    const client = await MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true, }); // connect to mongoDB
    const db = client.db("my-blog"); // get database

    const articleInfo = await db.collection("articles").findOne({ name: articleName }); // get article info from database
    res.status(200).json(articleInfo); // send article info to client

    client.close(); // close connection to mongoDB
  } catch (error) {
    res.status(500).json({ message: "Error connecting to the db", error }); // send error to client
  }
});

app.post("/api/articles/:name/upvote", async (req, res) => {
  try {
    const articleName = req.params.name; // get article name from url
    const client = await MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true, }); // connect to mongoDB
    const db = client.db("my-blog"); // get database

    const articleInfo = await db.collection("articles").findOne({ name: articleName }); // get article info from database
    await db.collection("articles").updateOne({ name: articleName }, { $set: { upvotes: articleInfo.upvotes + 1 } }); // update upvotes in database
    const updatedArticleInfo = await db.collection("articles").findOne({ name: articleName }); // get updated article info from database
    res.status(200).json(updatedArticleInfo); // send updated article info to client

    client.close(); // close connection to mongoDB
  } catch (error) {
    res.status(500).json({ message: "Error connecting to the db", error }); // send error to client
  }
});

app.post("/api/articles/:name/add-comment", async (req, res) => {
  try {
    const articleName = req.params.name; // get article name from url
    const comment = { username: req.body.username, text: req.body.text }; // get comment from request body
    const client = await MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true, }); // connect to mongoDB
    const db = client.db("my-blog"); // get database

    const articleInfo = await db.collection("articles").findOne({ name: articleName }); // get article info from database
    await db.collection("articles").updateOne({ name: articleName }, { $set: { comments: articleInfo.comments.concat(comment) } }); // update comments in database
    const updatedArticleInfo = await db.collection("articles").findOne({ name: articleName }); // get updated article info from database
    res.status(200).json(updatedArticleInfo); // send updated article info to client

    client.close(); // close connection to mongoDB
  } catch (error) {
    res.status(500).json({ message: "Error connecting to the db", error }); // send error to client
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html")); // send index.html to client
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});