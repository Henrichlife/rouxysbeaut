import React from "react";
import { BsCart3 } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { Links, linkAll } from "./Navdata";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./nav.css";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };

    return (
        <menu>
            <ul className="mainLink">
                {Links.map(({ id, link, title }) => {
                    return (
                        <li key={id}>
                            <NavLink
                                to={link}
                                end
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>

            <div
                className={showMenu ? "mobile-nav" : "hide-nav"}
                id="mobile-nav"
            >
                <ul>
                    {linkAll.map(({ id, link, title }) => {
                        return (
                            <li key={id}>
                                <NavLink
                                    to={link}
                                    onClick={() =>
                                        setShowMenu((prev) => !prev)
                                    }
                                >
                                    {title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="cart-mobile">
                <Link to="/Cart">
                    <BsCart3 color="white" size={25} />
                </Link>

                <div className="toggle-btn">
                    <button onClick={toggleMenu}>
                        {showMenu ? (
                            <AiOutlineCloseCircle
                                size={25}
                                color="white"
                            />
                        ) : (
                            <GiHamburgerMenu
                                size={28}
                                color="white"
                            />
                        )}
                    </button>
                </div>
            </div>
        </menu>
    );
};

export default Nav;
