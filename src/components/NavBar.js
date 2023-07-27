import React from "react";
import CartWidget from "./cartWidget/CartWidget";

const NavBar = () => {
    return (
    <div>
        <nav className="header flex justify-between py-4 px-2 bg-amber-200 text-black">
            <a href=""><strong>Inicio</strong></a>
            <a href=""><strong>Productos</strong></a>
            <a href=""><strong>PRUEBA</strong></a>
            <a href=""><strong>Nosotros</strong></a>

            <CartWidget />
        </nav>
       
    </div>
    )
}

export default NavBar