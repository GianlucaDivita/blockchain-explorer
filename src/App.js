import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import {Component} from "react"
import React from "react";
import Transactions from './Components/Transactions';
import Addresses from './Components/Addresses';
import Wallet from './Components/Wallet';
import Navigation from './Components/Navigation';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Navigation/>
        <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/Transactions" element={<Transactions/>} />
        <Route path="/Addresses" element={<Addresses/>} />
        <Route Component={Error} />
        <Route path="/Wallet" element={<Wallet/>} />
      </Routes>
      </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
