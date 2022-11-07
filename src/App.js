import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Transactions from "./Components/Transactions";
import Addresses from "./Components/Addresses";
import Wallet from "./Components/Wallet";
import { Transfer } from "./Components/Transfer";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Transactions" element={<Transactions />} />
            <Route path="/Addresses" element={<Addresses />} />
            <Route path="/Wallet" element={<Wallet />} />
            <Route path="/Transfer/:receiver" element={<Transfer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
