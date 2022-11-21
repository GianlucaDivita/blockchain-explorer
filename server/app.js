import express, { request } from "express";
import mongoose from "mongoose";
import seedData from "./seedData.js";

const app = express();
app.use(express.json());
const port = 3000;
seedData()

// mongoose.connect("mongodb://mongo:27017", { useNewUrlParser: true }).then(
//   () => {
//     console.log("Mongoose Connected Successfully");
//   },
//   (error) => {
//     console.log("Mongoose could not connect: " + error);
//   }
// );

const data = [
  "0x4C9E4585Bd7623Db96Dd544D9A3f99aA05DB7876",
  "0xD37D5f5104d9ecc0BbF25208a699E36A3Ce5F7cD",
  "0xaFdF79649998bf681c1813a41ed6c9d820B8dFs92",
  "0xaDC2611a2F93694F8d3C3bd09900e44FD6D89A73",
  "0xac1228b35aB5BC71579041155c1cE36c4EFF828c",
  "0xaA5eF713C5A837f8e63162A2F51Bc58557b0f3A7",
  "0xa3e71CAfd5b383b401496C97057EA7B94eDB878d",
  "0xa26BCAbf497FC3ad15D3F868dBa026E41604B5C0",
  "0xa96009c69222393C92FC76925c688C8782Cc5aF4",
  "0xaD6F638D81FC17C61F38E724BdC4E424D1C14395",
];

app.get("/addresses", (req, res) => {
return res.send(200, {data}) 
})

app.get("/balance", (req, res) => {
console.log(req.body)
return res.send(200, req.body.address + ' Balance: 120482 ETH') 
})


app.get("/", (req, res) => {
  console.log(`Server getting on ${port}`);
  return res.send(200, "Welcome to the blockchain explorer app. Have fun.");
})

app.get("/transactionhistory", (req, res) => {
  seedData.find({}, (err, transaction) => {
    return res.send(200, transaction);
  })
})

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
