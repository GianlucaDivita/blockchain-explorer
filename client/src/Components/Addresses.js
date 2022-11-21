/*
Interactive screen that outputs the list of mock Node addresses.

The list of Node addresses are interactive links that handle the user click action and redirect to the Transfer page.  
The target link will pass forward the Node address to the Transfer view.

*/

import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";



function Addresses() {
  const navigate = useNavigate();

const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3001/addresses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  }, []);

  return (
    <>
      <h3 className="wallet-title">Blockchain Node Addresses</h3>

      <div className="wallet-box">
        {data.map((receiver) => {
          return (
            <>
              <h3
                className="address"
                onClick={() => {
                  navigate(`/Transfer/${receiver}`);
                }}
              >
                {receiver}
              </h3>

              <br />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Addresses;
