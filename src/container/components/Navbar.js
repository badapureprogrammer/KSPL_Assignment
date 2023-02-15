import "./style.css";
import React, { useState} from "react";
import { MenuList } from "./MenuList";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.jpg";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleIconClick = () => {
    setClicked(!clicked);
  };

  const menuItem = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index} onClick={handleIconClick}>
        <NavLink to={url}>{title}</NavLink>
      </li>
    );
  });

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logoImage" />
        </Link>
      </div>
      <div className="menu-icon" onClick={handleIconClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuItem}</ul>
    </nav>
  );
};
export default Navbar;
