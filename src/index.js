import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Wallet from './Components/Wallet';
import Addresses from './Components/Addresses';
import Transactions from './Components/Transactions';
import Transfer from './Components/Transfer';
import Reciept from './Components/Reciept';
import Home from './Components/Home';

import './Components/style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
