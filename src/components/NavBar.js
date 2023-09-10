import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import logo from "../assets/fonoStore.png"

const NavBar = () => {
  return (
    <div>
      <nav className="header flex justify-between py-4 px-2 bg-barraNav text-white items-center">
        <NavLink to="/">
         <img src={logo} alt="Logo" className="h-10"/>
        </NavLink>
        <NavLink to="/category/Samsung">
          <strong>Samsung</strong>
        </NavLink>
        <NavLink to="/category/Iphone">
          <strong>Iphone</strong>
        </NavLink>
        <NavLink to="/category/Motorola">
          <strong>Motorola</strong>
        </NavLink>

        <NavLink to="/cart">
          <CartWidget />
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
