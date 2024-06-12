import logo from "../assets/images/LOGO.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="img_logo"/>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/About" activeclassname="active">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;