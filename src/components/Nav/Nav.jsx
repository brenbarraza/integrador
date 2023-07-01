import SearchBar from "../search/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav({ onSearch, logout }) {
  const activeStyle = { backgroundColor: "green" };
  const activeStyle2= { backgroundColor: "pink" };
  return (
    <nav className={style.container}>
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <button>Home</button>
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle2 : undefined)}
      >
        <button>About</button>
      </NavLink>
      <button onClick={logout}>LogOut</button>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
