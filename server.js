import express from "express";
import cors from "cors";
import posts from "./routers/post.router.js";
import blogs from "./routers/blog.router.js";
import users from "./routers/user.router.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.post || 5000;

const URI =
  "mongodb+srv://admin:jqvbQwSnXtvow2Ui@cluster0.hgqni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// var bodyParser = require("body-parser");
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", posts);
app.use("/blogs", blogs);
app.use("/users", users);

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

  /* CROS middleware */
app.use(function(req, res, next) {
  // Mọi domain
  // res.header("Access-Control-Allow-Origin", "*");
  // Domain nhất định
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
