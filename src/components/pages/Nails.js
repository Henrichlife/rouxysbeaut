import React from "react";
import Customer from "./Customer";
import "./nails.css";
import Section from "./Section";

const Nails = () => {
    return (
        <section>
            <Section
                heading="/images/lipy.jpg"
                title="Best Nail-Cortex"
                children="explore all colors "
            />

            <div className="nail-container">
                <div className="nail-content">
                    <p id="tex">Restocking check back few hours</p>
                </div>
            </div>

            <Customer />
        </section>
    );
};

export default Nails;
