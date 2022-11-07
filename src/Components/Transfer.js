/*

●	Interactive screen that displays the mockt Wallet address and the Node address passed via route parameter from the previous Address page.
●	This component will contain an interactive form and will handle the submission of the form via the user click action on the submit button.

The component will show a mock Transfer Receipt after the Submit action if clicked
*/


import React from "react";
import './style.css';

function Transfer() {

  return <>

  <h3 class='wallet-title'>Transfer</h3>
 
 <div class='transfer-box'>
  <h3 class='address'>From: 0x4C9E4585Bd7623Db96Dd544D9A3f99aA05DB7876</h3>
  <h3 class='address'>To: 0xa26BCAbf497FC3ad15D3F868dBa026E41604B5C0</h3>
  <input class='submit'></input>
  <button class='button'>Submit</button>
  </div>
  </>

}

export default Transfer;