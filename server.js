import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routers/post.router.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.post || 5000;

const URI =
  "mongodb+srv://admin:jqvbQwSnXtvow2Ui@cluster0.hgqni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(bodyParser.json({ limit: "30md" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30md" }));
app.use(cors());

app.use("/posts", posts);

// app.get("/", (req, res) => {
//   res.send("TRang chinh");
// });

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Sever is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
