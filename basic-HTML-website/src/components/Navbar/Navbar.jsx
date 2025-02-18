import { Link } from "react-router-dom";
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <figure className="navbar-left_img">
                    <img src="https://scontent.feoh14-1.fna.fbcdn.net/v/t39.30808-1/224163506_6040900062616571_6880193929664332016_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFD3Ib9GJUF5U13kZZzRLMtqe7MXD-0yMyp7sxcP7TIzOrEjS7hYYUAd36iiw2QM6drakkW14gnP8yy_DYsPRhJ&_nc_ohc=jLyyGFh9cXcQ7kNvgGGN0aQ&_nc_oc=AdgZY6zzgJKIwonid_GzRirPLs3r9Y-SpQs--Sfvkb0Sy9RBupMcG9wxFQHTm8PDu4E&_nc_zt=24&_nc_ht=scontent.feoh14-1.fna&_nc_gid=Adqb4bZ5AofvpXQOoLJqcT6&oh=00_AYCAw3OvKjATmRfGMFkhSEQtZv3-ifgoi1tfqOOwyo4E3g&oe=67B97CAA" alt="ospinajuanp"/>
                </figure>
                <div className="navbar-left_name">Juan Pablo Ospina Restrepo</div>
            </div>
            <div className="navbar-right">
                <ul className="navbar-right_link">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <span>/</span>
                    <li>
                        <Link to="/project">Project</Link>
                    </li>
                    <span>/</span>
                    <li>
                        <Link to="/articles">Articles</Link>
                    </li>
                    <span>/</span>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;