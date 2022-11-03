import React from "react";
import Customer from "./Customer";
import Section from "./Section";
import "./treatment.css";

const Treatment = () => {
    return (
        <section id="treatment">
            <Section
                heading="/images/second.jpg"
                title="Best Makeup"
                children="explore all colors of makeup"
            />
            <div className="treatment-container">
                <div className="treatment-content">
                    <p>Out of stock check back few hours</p>
                </div>
            </div>

            <Customer />
        </section>
    );
};

export default Treatment;
