import React from "react";
import "./Lips.css";
import Category from "./Category";
import { BsCart3 } from "react-icons/bs";
import Section from "./Section";
import Customer from "./Customer";

const Lips = () => {
    return (
        <section id="lips">
            <Section
                heading="/images/multi.jpg"
                title="PREMIUM LIPSTICK"
                children="Explore quality lipstick in rouxybeaut"
            />

            <div className="lips-container">
                <div className="lip-content">
                    <Category
                        image="/images/lipsbot.jpg"
                        title="Red lipstick"
                        tag="-15"
                        price="$45"
                        span="$80"
                        cart={<BsCart3 />}
                    />

                    <Category
                        image="/images/orange.jpg"
                        title="orange lipstick"
                        tag="-10"
                        price="$35"
                        span="$60"
                        cart={<BsCart3 />}
                    />
                </div>

                <Customer />
            </div>
        </section>
    );
};

export default Lips;
