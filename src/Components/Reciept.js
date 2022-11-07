
/*
●	This component will contain mocked Receipt data.
●	This component will hide/show based on if there is data or not.

*/

import React from 'react';
import './style.css';

function Reciept() {

  return <>

  <h3 class='wallet-title'>Reciept</h3>
 
 <div class='wallet-box-extended'>
  <h3 class='address'>Transaction Hash: 0xd9ae90073a2285d94ba419598e37b0b37206ba9ac54a09c45b5d3b6bab30a8fb</h3>
  <p class='transaction-info'><b>Block Hash:</b> a11a290ad6828f7c76e8798a6e1f6b3592083fb6f8ee298b510268bc47b674f6</p>
  <p class='transaction-info'><b>Block Number:</b> 12</p>
  <p class='transaction-info'><b>From:</b> 0xaD6F638D81FC17C61F38E724BdC4E424D1C14395</p>
  <p class='transaction-info'><b>To:</b> 0xaDC2611a2F93694F8d3C3bd09900e44FD6D89A73</p>
  <p class='transaction-info'><b>Gas:</b> 21000 <b>WEI</b></p>
  </div>

  </>

  }

  export default Reciept;