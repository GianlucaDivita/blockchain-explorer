/*
This component will contain read only mock data and contain the wallet details

*/

import React, { useState, useEffect } from "react";
import "./style.css";

function Wallet() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/balance")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <h3 class="wallet-title">My Wallet</h3>

      <div class="wallet-box">
        <h3 class="address">Address: {data.address}</h3>
        <p class="balance">Balance: {data.balance} ETH</p>
      </div>
    </>
  );
}

export default Wallet;
