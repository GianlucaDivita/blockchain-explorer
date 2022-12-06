/*
●	This component will contain mocked Receipt data.
●	This component will hide/show based on if there is data or not.

*/

import React from "react";
import "./receipt.css";

function Receipt({ to, from, transactionHash, gasUsed, blockNumber, blockHash }) {
  return (
    <>
      <h3 className="wallet-title">Receipt</h3>

      <div className="wallet-box-extended">
        <h3 className="address">
          <b>Transaction Hash:</b>{" "} 
          {transactionHash}
        </h3>
        <p className="transaction-info">
          <b>Block Hash:</b>{" "}
          {blockHash}
        </p>
        <p className="transaction-info">
          <b>Block Number:</b> {blockNumber}
        </p>
        <p className="transaction-info">
          <b>From:</b> {from}
        </p>
        <p className="transaction-info">
          <b>To:</b> {to}
        </p>
        <p className="transaction-info">
          <b>GAS:</b> {gasUsed} <b>WEI</b>
        </p>
      </div>
    </>
  );
}

export default Receipt;
