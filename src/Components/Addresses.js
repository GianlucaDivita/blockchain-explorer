

/*
Interactive screen that outputs the list of mock Node addresses.

The list of Node addresses are interactive links that handle the user click action and redirect to the Transfer page.  
The target link will pass forward the Node address to the Transfer view.

*/


import React from "react";
import './style.css';

function Addresses() {

  return <>

  <h3 class='wallet-title'>Blockchain Node Addresses</h3>
 
 <div class='wallet-box'>
  <h3 class='address'>0x4C9E4585Bd7623Db96Dd544D9A3f99aA05DB7876</h3>
  <h3 class='address'>0xD37D5f5104d9ecc0BbF25208a699E36A3Ce5F7cD</h3>
  <h3 class='address'>0xaFdF79649998bf681c1813a41ed6c9d820B8dF92</h3>
  <h3 class='address'>0xaDC2611a2F93694F8d3C3bd09900e44FD6D89A73</h3>
  <h3 class='address'>0xac1228b35aB5BC71579041155c1cE36c4EFF828c</h3>
  <h3 class='address'>0xaA5eF713C5A837f8e63162A2F51Bc58557b0f3A7</h3>
  <h3 class='address'>0xa3e71CAfd5b383b401496C97057EA7B94eDB878d</h3>
  <h3 class='address'>0xa26BCAbf497FC3ad15D3F868dBa026E41604B5C0</h3>
  <h3 class='address'>0xa96009c69222393C92FC76925c688C8782Cc5aF4</h3>
  <h3 class='address'>0xaD6F638D81FC17C61F38E724BdC4E424D1C14395</h3>




  </div>
  </>

}

export default Addresses;