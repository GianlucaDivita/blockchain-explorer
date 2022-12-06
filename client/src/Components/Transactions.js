/*
●	Read-only screen that outputs the transaction of mock history data.
●	When click Transaction link in Navigation tab will navigate to the Transaction History view
*/

import React, { useState, useEffect } from "react";
import "./transactions.css";

function Transactions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/transactionhistory")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <h3 className="wallet-title">Transaction History</h3>

      {data.map((transaction, key) => {
        return (
          <div className="wallet-box-extended-th" key={key}>

              <h3 className="address">
                <p className="hash">Hash: {transaction.transactionHash}</p>
              </h3>
              <p className="transaction-info">
                <b>Status:</b> {transaction.status ? "Success" : "Failed"}
              </p>
              <p className="transaction-info">
                <b>Timestamp:</b> {transaction.createdAt}
              </p>
              <p className="transaction-info">
                <b>From:</b> {transaction.from}
              </p>
              <p className="transaction-info">
                <b>To:</b> {transaction.to}
              </p>
              <p className="transaction-info">
                <b>Value:</b> {transaction.amount} <b>ETH</b>
              </p>
              <p className="transaction-info">
                <b>Gas:</b> {transaction.gasUsed} <b>WEI</b>
              </p>
           
          </div>
        );
      })}
    </>
  );
}

export default Transactions;
