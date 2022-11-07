import {Link} from "react-router-dom"

const Navigation = () => {
    return (
  
      <ul className="link"> 
      <li><Link to= "/">Home</Link></li>
      <li><Link to="/Transactions">Transactions</Link></li>
      <li><Link to= "/Addresses">Addresses</Link></li>
      <li><Link to= "/Wallet">Wallet</Link></li>
      </ul>
  
    );
  };

  
export default Navigation;