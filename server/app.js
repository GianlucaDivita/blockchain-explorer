import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

mongoose.connect("mongodb://mongo:27017", { useNewUrlParser: true }).then(
  () => {
    console.log("Mongoose Connected Successfully");
  },
  (error) => {
    console.log("Mongoose could not connect: " + error);
  }
);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
