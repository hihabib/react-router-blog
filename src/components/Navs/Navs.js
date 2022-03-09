import React from 'react';
import { NavLink } from 'react-router-dom';

const Navs = () => {

    return (
        <nav style={{display: 'flex', columnGap: "20px"}}>
            <NavLink  to="/">Home</NavLink>
            <NavLink  to="/contact-us">Contact Us</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink  to="/posts">Blog</NavLink>
        </nav>
    );
};

export default Navs;