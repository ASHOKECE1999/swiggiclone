import { Link } from "react-router-dom";
import { headerUrl } from "../utils/constants";
import useOnlineCheck from "../utils/useOnlineCheck";

export const Header = () => {
  const isOnline = useOnlineCheck();
  return (
    <div className="Header">
      <div className="logo-container">
        <img src={headerUrl} />
      </div>
      <div className="nav-item-container">
        <ul>
        
          <li>online:{isOnline ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contactus"> Contact US</Link>
          </li>
          <li>
            <Link to="/cart"> Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
