import {Link} from "react-router-dom"
import "./nav.css";

const Navigation = () => {
    return (
  
      <ul className="list"> 
      <li><Link className="navlink" to= "/">Home</Link></li>
      <li><Link className="navlink" to="/Transactions">Transactions</Link></li>
      <li><Link className="navlink" to= "/Addresses">Addresses</Link></li>
      <li><Link className="navlink" to= "/Wallet">Wallet</Link></li>
      </ul>
  
    );
  };

  
export default Navigation;