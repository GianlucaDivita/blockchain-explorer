/*
●	This component will contain mocked Receipt data.
●	This component will hide/show based on if there is data or not.

*/

import React from "react";
import "./style.css";

function Receipt({ receiver, amount }) {
  return (
    <>
      <h3 className="wallet-title">Receipt</h3>

      <div className="wallet-box-extended">
        <h3 className="address">
          Transaction Hash:
          0xd9ae90073a2285d94ba419598e37b0b37206ba9ac54a09c45b5d3b6bab30a8fb
        </h3>
        <p className="transaction-info">
          <b>Block Hash:</b>{" "}
          a11a290ad6828f7c76e8798a6e1f6b3592083fb6f8ee298b510268bc47b674f6
        </p>
        <p className="transaction-info">
          <b>Block Number:</b> 12
        </p>
        <p className="transaction-info">
          <b>From:</b> 0x4C9E4585Bd7623Db96Dd544D9A3f99aA05DB7876
        </p>
        <p className="transaction-info">
          <b>To:</b> {receiver}
        </p>
        <p className="transaction-info">
          <b>Gas:</b> {amount} <b>WEI</b>
        </p>
      </div>
    </>
  );
}

export default Receipt;
