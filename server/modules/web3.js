import Web3 from "web3";
const web3 = new Web3("http://blockChain:8545");

var accounts = [];
const getAccounts = async () => {
  if (accounts.length) return accounts;
  accounts = await web3.eth.getAccounts();
  return accounts;
};

const getBalance = async (address) => {
  return await web3.eth.getBalance(address);
};

const sendTransaction = async ({ source, destination, value }) => {
  console.log(source);
  return await web3.eth.sendTransaction({
    from: source,
    to: destination,
    value: value,
  });
};

export default { getAccounts, getBalance, sendTransaction };
