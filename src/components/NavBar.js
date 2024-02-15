import React from "react";
import { NavLink } from "react-router-dom";


function NavBar () {
    return (
        <nav id="navbar">
            <ul>
                <li id="jikoni-navbar">
                    <NavLink exact='true' to="/">Jikoni</NavLink>
                </li>
                <li>
                    <NavLink exact='true' to="/">Home</NavLink>
                </li><li>
                    <NavLink exact='true' to="/food">Food</NavLink>
                </li><li>
                    <NavLink exact='true' to="/add">Add Recipe</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;