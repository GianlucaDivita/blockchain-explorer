import express from "express";
import seedData from "./seedData.js";
import cors from "cors";
import web3 from "./modules/web3.js";

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.get("/addresses", async (req, res) => {
  return res.send(await web3.getAccounts());
});

app.get("/balance/:address", async (req, res) => {
  return res.send({
    address: req.params.address,
    balance: await web3.getBalance(req.params.address),
  });
});

app.get("/transactionHistory", (req, res) => {
  seedData.find({}, (err, transaction) => {
    return res.send(transaction);
  });
});

app.post("/sendTransaction", async (req, res) => {
  return res.send(
    await web3.sendTransaction(req.body).then((res) => {
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

app.get("/", (req, res) => {
  return res.send("Welcome to the blockchain explorer app. Have fun.");
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
