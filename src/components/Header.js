import {LOGO_URL} from "../utils/constants";
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnNameReact,setbtnNameReact] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  // console.log(data);
  const cartItems = useSelector((store)=>store.cart.items);
    return (
      <div className="flex justify-between shadow-lg bg-red-300 sm:bg-yellow-200 lg:bg-green-300">
        <div className="logo-container">
          <br></br>
          &nbsp;<img src={LOGO_URL} className="w-24" />
  
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">

          <li className="px-4">
            Online Status: {onlineStatus ? "🟢":"🔴"}
          </li>

            <li className="px-4">
             <Link to="/">Home</Link>
              </li>
            <li className="px-4">
            <Link to="/about">About Us</Link>
              </li>
            <li className="px-4">
            <Link to="/contact">Contact Us</Link>
              </li>
              <li className="px-4">
                <Link to="/grocery">Grocery</Link>
              </li>
            <li className="px-4 font-bold text-xl">
            <Link to='/cart'>Cart ({cartItems.length} Items)</Link>
              {/* {loggedInUser} */}
              </li>
            <button className="login" onClick={()=>{btnNameReact=='Login' ? setbtnNameReact('Logout') :setbtnNameReact('Login') }}>{btnNameReact}</button>
            <li className="px-4 font-bold">
              {/* Cart */}
              {loggedInUser}
              </li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;