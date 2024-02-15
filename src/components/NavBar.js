import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
  
function NavBar () {
    return(
        <div className="nav">
            <div className="nav-logo">Jik<span>oni</span></div>
            <ul className="nav-menu">
                <li>
                    <NavLink exact to="/">Home</NavLink> 
                </li>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li><li>
                    <NavLink exact to="/food">Food</NavLink>
                </li><li>
                    <NavLink exact to="/add">Add Recipe</NavLink>
                </li>
            </ul>
        </div>
    )
}


export default NavBar;
