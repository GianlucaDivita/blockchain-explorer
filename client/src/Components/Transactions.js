/*
●	Read-only screen that outputs the transaction of mock history data.
●	When click Transaction link in Navigation tab will navigate to the Transaction History view
*/

import React, {useState, useEffect} from "react";
import './style.css';

function Transactions() {

const [data, setData] = useState([]);

useEffect(() => {
  fetch("http://localhost:3001/transactionhistory")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setData(data);
    });
}, []);


  return <>

  <h3 class='wallet-title'>Transaction History</h3>

 
        {data.map((receiver) => {
          return (
            <>
          <div class='wallet-box-extended'>
            <h3 class='address'>Transaction Hash: 0xd9ae90073a2285d94ba419598e37b0b37206ba9ac54a09c45b5d3b6bab30a8fb</h3>
            <p class='transaction-info'><b>Status:</b> SUCCESS</p>
            <p class='transaction-info'><b>Timestamp:</b> 2022-11-06 6:08:56 PM EST</p>
            <p class='transaction-info'><b>From:</b> 0xac1228b35aB5BC71579041155c1cE36c4EFF828c</p>
            <p class='transaction-info'><b>To:</b> 0xaDC2611a2F93694F8d3C3bd09900e44FD6D89A73</p>
            <p class='transaction-info'><b>Value:</b> 2000 <b>ETH</b></p>
            <p class='transaction-info'><b>Gas:</b> 21000 <b>WEI</b></p>
            </div>
            </>
          );
        })}
 
 <div class='wallet-box-extended'>
  <h3 class='address'>Transaction Hash: 0xd9ae90073a2285d94ba419598e37b0b37206ba9ac54a09c45b5d3b6bab30a8fb</h3>
  <p class='transaction-info'><b>Status:</b> SUCCESS</p>
  <p class='transaction-info'><b>Timestamp:</b> 2022-11-06 6:08:56 PM EST</p>
  <p class='transaction-info'><b>From:</b> 0xac1228b35aB5BC71579041155c1cE36c4EFF828c</p>
  <p class='transaction-info'><b>To:</b> 0xaDC2611a2F93694F8d3C3bd09900e44FD6D89A73</p>
  <p class='transaction-info'><b>Value:</b> 2000 <b>ETH</b></p>
  <p class='transaction-info'><b>Gas:</b> 21000 <b>WEI</b></p>
  </div>

  <div class='wallet-box-extended'>
  <h3 class='address'>Transaction Hash: 0xd9ae90073a2285d94ba419598e37b0b37206ba9ac54a09c45b5d3b6bab30a8fb</h3>
  <p class='transaction-info'><b>Status:</b> SUCCESS</p>
  <p class='transaction-info'><b>Timestamp:</b> 2022-11-06 6:08:56 PM EST</p>
  <p class='transaction-info'><b>From:</b> 0xac1228b35aB5BC71579041155c1cE36c4EFF828c</p>
  <p class='transaction-info'><b>To:</b> 0xaDC2611a2F93694F8d3C3bd09900e44FD6D89A73</p>
  <p class='transaction-info'><b>Value:</b> 2000 <b>ETH</b></p>
  <p class='transaction-info'><b>Gas:</b> 21000 <b>WEI</b></p>
  </div>

  <div class='wallet-box-extended'>
  <h3 class='address'>Transaction Hash: 0xd9ae90073a2285d94ba419598e37b0b37206ba9ac54a09c45b5d3b6bab30a8fb</h3>
  <p class='transaction-info'><b>Status:</b> SUCCESS</p>
  <p class='transaction-info'><b>Timestamp:</b> 2022-11-06 6:08:56 PM EST</p>
  <p class='transaction-info'><b>From:</b> 0xac1228b35aB5BC71579041155c1cE36c4EFF828c</p>
  <p class='transaction-info'><b>To:</b> 0xaDC2611a2F93694F8d3C3bd09900e44FD6D89A73</p>
  <p class='transaction-info'><b>Value:</b> 2000 <b>ETH</b></p>
  <p class='transaction-info'><b>Gas:</b> 21000 <b>WEI</b></p>
  </div>
  </>

}

export default Transactions;