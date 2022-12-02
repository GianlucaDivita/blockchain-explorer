/*

●	Interactive screen that displays the mockt Wallet address and the Node address passed via route parameter from the previous Address page.
●	This component will contain an interactive form and will handle the submission of the form via the user click action on the submit button.

The component will show a mock Transfer Receipt after the Submit action if clicked
*/

import { useState } from "react";
import "./transfer.css";
import { useParams } from "react-router-dom";
import Receipt from "./Receipt";

export const Transfer = () => {
  const { receiver } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");

  const transact = () => {
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
        <h3 className="address">
          From: 0x4C9E4585Bd7623Db96Dd544D9A3f99aA05DB7876
        </h3>
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
