import React from 'react'
import { Link,NavLink,Outlet } from 'react-router-dom'

const Navbar = () => {

    // console.log(props);
    // setTimeout(()=>
    // {
    // props.historty.push("/about");
    // },3000);

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;