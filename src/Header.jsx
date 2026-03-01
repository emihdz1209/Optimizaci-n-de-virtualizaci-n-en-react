import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="header-nav">
      <NavLink to="/" end>
        Contador
      </NavLink>
      <NavLink to="/pokedex">
        Pokédex
      </NavLink>
    </nav>
  );
}

export default Header;