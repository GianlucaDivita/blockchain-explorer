
/*
This component will contain read only mock data and contain the wallet details

*/

import React from "react";
import './style.css';

function Wallet() {

  return <>

  <h3 class='wallet-title'>My Wallet</h3>
 
 <div class='wallet-box'>
  <h3 class='address'>Address: 0x4C9E4585Bd7623Db96Dd544D9A3f99aA05DB7876</h3>
  <p class='balance'> Balance: 10000 ETH</p>
  </div>
  </>

}

export default Wallet;