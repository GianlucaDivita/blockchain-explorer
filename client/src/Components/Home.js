import React from "react";
import "./home.css";
import Cube from "./cube";

const Home = () => {
  return (
    <div>
      <p className="home">Welcome to the blockchain explorer app!</p>

      <Cube/>

      <p className="home">Created by <a href="https://github.com/GianlucaDivita" target = "_blank" rel="noopener noreferrer" >Gianluca Di Vita</a> & <a href="https://github.com/s4r1m" target= "_blank" rel="noopener noreferrer" >Sarim Sohail</a> . </p>
    </div>
  );
};

export default Home;
