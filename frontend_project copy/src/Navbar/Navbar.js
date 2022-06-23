import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <Link to="/homepage" style={{ textDecoration: "none" }}>
        <div className={classes.logo}>
          Guide Bite <FastfoodIcon fontSize="large" />
        </div>
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/homepage" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/find-recipes" activeClassName={classes.active}>
              Find Recipes
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-recipe" activeClassName={classes.active}>
              Add Recipe
            </NavLink>
          </li>

          <div class="dropdown">
            <button class="dropbtn"></button>
            <NavLink to="/account" activeClassName={classes.active}>
              <AccountCircleIcon fontSize="large" />
            </NavLink>
            <div class="dropdown-content">
              <Link to="/account">Account</Link>
              <a href="#">Favourite Recipes</a>
              <a href="#">Subscriptions</a>
              <a href="#">Manage Devices</a>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
