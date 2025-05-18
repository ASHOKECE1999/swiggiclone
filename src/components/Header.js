import { Link } from "react-router-dom";
import { headerUrl } from "../utils/constants";
import useOnlineCheck from "../utils/useOnlineCheck";
import { useContext } from "react";

import LogContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const isOnline = useOnlineCheck();
  const cartItems=useSelector(state=>state.cart.items)
  // const {logedInUser}=useContext(LogContext)
  return (
    <div className="flex justify-between items-center border-4 m-2 bg-blue-300  shadow-md shadow-cyan-500/50 ">
      <div>
        <img src={headerUrl} />
      </div>
      <div className="flex justify-between flex-row ml-[100] items-center">
        <LogContext.Consumer>
            {
              (value)=>{
                const {logedInUser}=value
                return <h1>{logedInUser}</h1>
              }
            }
        </LogContext.Consumer>
        <ul className="flex justify-around flex-row  w-[100%]  ml-[100] text-white font-bold text-xl items-center">
          <li className="p-3">online:{isOnline ? "🟢" : "🔴"}</li>
          <li className="p-3">
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li className="p-3">
            <Link to="/"> Home</Link>
          </li>
          <li className="p-3">
            <Link to="/about"> About</Link>
          </li>
          <li className="p-3">
            <Link to="/contactus"> Contact US</Link>
          </li>
          <li className="p-3">
            <Link to="/cart" className="font-bold"> Cart - {cartItems.length} Items</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
