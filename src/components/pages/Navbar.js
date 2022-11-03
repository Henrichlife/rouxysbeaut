import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import Nav from "../folders/Nav";

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="navbar-container">
                <div className="navbar-content">
                    <div className="content-right">
                        <h1>
                            <Link to="/">
                                ROUXY<span>BEAUT</span>
                            </Link>
                        </h1>
                    </div>

                    <div className="content-left">
                        <Nav />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
