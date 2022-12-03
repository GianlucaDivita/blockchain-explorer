/*

●	Interactive screen that displays the mockt Wallet address and the Node address passed via route parameter from the previous Address page.
●	This component will contain an interactive form and will handle the submission of the form via the user click action on the submit button.

The component will show a mock Transfer Receipt after the Submit action if clicked
*/

import { useState, useEffect } from "react";
import "./transfer.css";
import { useParams } from "react-router-dom";
import Receipt from "./Receipt";
import axios from "axios";

export const Transfer = () => {
  const { receiver } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/addresses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setAccount(data[0]);
      });
  }, []);

  const transact = () => {
    axios
      .post("http://localhost:3001/sendTransaction", {
        getsd: "dfsd",
        source: account,
        destination: receiver,
        value: amount,
      })
      .then((response) => console.log(response.data))
      .catch(function (error) {
        console.log(error);
      });
    setTransactions((prev) => {
      return [...prev, { receiver: receiver, amount: amount }];
    });
  };

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <>
      <h3 className="wallet-title">Transfer</h3>

      <div className="transfer-box">
        <h3 className="address">From: {account}</h3>
        <h3 className="address">To: {receiver}</h3>
        <input className="text" onChange={handleChange}></input>
        <br />
        <button className="submit" onClick={transact}>
          Submit
        </button>
      </div>
      {transactions.map((transaction, key) => {
        return <Receipt {...transaction} key={key} />;
      })}
    </>
  );
};
