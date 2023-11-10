import { NavLink } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <div className="navbar">
      <img src="/Logo.png" alt="Logomarca pokemon" className="logo" />

      <div className="navigation">
        <NavLink to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/pokedex" className="nav-link" activeClassName="active">
          Pokedex
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
