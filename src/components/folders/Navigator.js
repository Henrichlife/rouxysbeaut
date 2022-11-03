import React from "react";
import { NavLink } from "react-router-dom";

import "./navigator.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "./Navdata";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import images from "../../index2.json";

const Navigator = () => {
    return (
        <section id="navigator">
            <div className="main">
                <div className="sidebar">
                    <h1>
                        STORE{" "}
                        <GiHamburgerMenu
                            className="hamburger"
                            size={25}
                        />
                    </h1>

                    <div className="side-nav">
                        <ul>
                            {navLinks.map(({ id, link, title }) => {
                                return (
                                    <li key={id}>
                                        <NavLink to={link}>
                                            {title}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="con">
                    {
                        <Carousel variant="dark">
                            {images &&
                                images.map((item) => {
                                    return (
                                        <Carousel.Item>
                                            <div key={item.id}>
                                                <img
                                                    className="d-block w-100"
                                                    src={item.images}
                                                    alt="customer"
                                                />
                                            </div>
                                        </Carousel.Item>
                                    );
                                })}
                        </Carousel>
                    }
                </div>
            </div>
        </section>
    );
};

export default Navigator;
