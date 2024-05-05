import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <ul className="menu">
        <li className="item">
          <Link to="/">SignIn</Link>
        </li>
        <li className="item">
          <Link to="/SignUp">SignUp</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;