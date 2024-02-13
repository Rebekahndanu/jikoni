import React from "react";
import { NavLink } from "react-router-dom";


function NavBar () {
    return (
        <nav id="navbar">
            <ul>
                <li id="jikoni-navbar">
                    <NavLink exact to="/">Jikoni</NavLink>
                </li>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li><li>
                    <NavLink exact to="/food">Food</NavLink>
                </li><li>
                    <NavLink exact to="/add">Add Recipe</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;