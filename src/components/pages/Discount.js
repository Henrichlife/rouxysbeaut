import React from "react";
import "./discount.css";
import collect from "../../assets/cosmetics/collect.jpg";
import eye from "../../assets/cosmetics/eye.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Discount = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="discount">
            <div className="discount-container">
                <div className="discount-content">
                    <div className="discount-sales">
                        <p>
                            Get the best face cleansers on
                            <span>ROUXYBEAUT</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="cleanser-content" data-aos="zoom-in">
                <div className="cleanser-right">
                    <img src={collect} alt="makeup" />

                    <h3> MAKEUPS UNLEASHED</h3>
                    <p>
                        Our foundation shades offer a wide variety of
                        advantages including, hydrating, and
                        moisturizing benefits. Moreover, our
                        lightweight loose powder is perfect for
                        setting makeup, unifying complexion, and
                        keeping unwanted shine under control.
                    </p>
                </div>

                <div className="cleanser-left">
                    <img src={eye} alt="eye" />

                    <h3>EXPLORE COLORS</h3>
                    <p>
                        ROUXYBEAUT enables women to optimize their
                        radiance for every situation through a vegan
                        and oil free makeup line suitable for all skin
                        types.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Discount;
