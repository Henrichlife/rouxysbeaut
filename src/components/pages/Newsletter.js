import React from "react";
import "./newsleter.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Newsletter = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <article>
            <div className="container-letter">
                <div
                    className="newsletter-content"
                    data-aos="fade-up"
                >
                    <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>

                    <input placeholder="Email" />
                    <button>Subscribe</button>
                </div>
            </div>
        </article>
    );
};

export default Newsletter;
