import React from "react";
import plus from "../../assets/cosmetics/plus.jpg";
import "./shop.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Shop = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section id="Shop">
            <div className="shop-container" data-aos="zoom-in-up">
                <div className="shop-right">
                    <h1>"optimal satisfaction"</h1>

                    <p>
                        Finally, I am recognized and valued as I am,
                        and with Rouxybeaut, the best splendor is as
                        easy as ABC. I am fully confident and can
                        unleash my creativity, prompting amazement and
                        admiration, each instant, each time.
                    </p>

                    <button>Shop now</button>
                </div>
                <div className="shop-left">
                    <img src={plus} alt="girl" />
                </div>
            </div>
        </section>
    );
};

export default Shop;
