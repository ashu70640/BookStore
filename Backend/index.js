import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
const app = express();

app.use(cors());

app.use(express.json());
dotenv.config();
const port = process.env.PORT || 4000;

const URI = process.env.MongodbURI;
console.log("Connected to mongoDB");
try {
  mongoose.connect(URI);
} catch (error) {
  console.log("Error: ", error);
}

//defining route
app.use("/book", bookRoute);
app.use("/users", userRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
