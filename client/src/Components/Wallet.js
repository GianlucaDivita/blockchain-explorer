/*
This component will contain read only mock data and contain the wallet details

*/

import React, { useState, useEffect } from "react";
import "./wallet.css";

function Wallet() {
  const [accounts, setAccounts] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/addresses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAccounts(data);
      });
  }, []);

  useEffect(() => {
    if (accounts.length) {
      fetch(`http://localhost:3001/balance/${accounts[0]}`)
        .then((res) => res.json())
        .then((value) => {
          console.log(value);
          setData(value);
        });
    }
  }, [accounts]);

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
