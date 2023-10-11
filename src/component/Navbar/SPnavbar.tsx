import { NavLink } from "react-router-dom";
import "./SPnavbar.css";

export default function SPNavbar() {
  return (
    <div>
      <div className="navbar" id="call">
        <div className="nav">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/signIn">LOGIN</NavLink>
          <NavLink to="/dashboard">DASHBOARD</NavLink>
        </div>
      </div>
    </div>
  );
}
