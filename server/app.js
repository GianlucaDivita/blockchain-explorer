import express from "express";
import seedData from "./seedData.js";
import cors from "cors";
import Web3 from "web3";

const web3 = new Web3("ws://blockChain:8545");

const accounts = await web3.eth.getAccounts();

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.get("/addresses", async (req, res) => {
  return res.send(accounts);
});

app.get("/balance/:address", async (req, res) => {
  return res.send({
    address: req.params.address,
    balance: await web3.eth.getBalance(req.params.address),
  });
});

app.get("/", (req, res) => {
  return res.send("Welcome to the blockchain explorer app. Have fun.");
});

app.get("/transactionHistory", (req, res) => {
  seedData.find({}, (err, transaction) => {
    return res.send(transaction);
  });
});

app.post("/sendTransaction", async (req, res) => {
  return res.send(
    await web3.eth
      .sendTransaction({
        from: req.body.source,
        to: req.body.destination,
        value: req.body.value,
      })
      .then((res) => {
        seedData.create({
          from: res.from,
          to: res.to,
          amount: req.body.value,
          status: true,
          gasUsed: res.gasUsed,
          transactionHash: res.transactionHash,
        });
        return res;
      })
  );
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
