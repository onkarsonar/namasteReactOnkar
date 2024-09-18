import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

const Header = () => {

  const [btnNameReact,setbtnNameReact] = useState('Login');
    return (
      <div className="header">
        <div className="logo-container">
          <br></br>
          &nbsp;<img src={LOGO_URL} className="logo" />
  
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{setbtnNameReact('Logout')}}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;