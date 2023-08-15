import React from "react";
import CartWidget from "./cartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
    <div>
        <nav className="header flex justify-between py-4 px-2 bg-amber-200 text-black">
            <NavLink to="/"><strong>Brand</strong></NavLink>
            <NavLink to="/category/Samsung"><strong>Samsung</strong></NavLink>
            <NavLink to="/category/Iphone"><strong>Iphone</strong></NavLink>
            <NavLink to="/category/Motorola"><strong>Motorola</strong></NavLink>

            <CartWidget />
        </nav>
       
    </div>
    )
}

export default NavBar