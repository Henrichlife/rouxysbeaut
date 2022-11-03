import React from "react";
import "./fragrance.css";
import Section from "./Section";
import Category from "./Category";
import { BsCart3 } from "react-icons/bs";
import Customer from "./Customer";

const Fragrance = () => {
    return (
        <section id="fragrance">
            <Section
                heading="images/fea.jpg"
                title="#FRAGRANCE"
                children="Smell good Feel good"
            />

            <div className="fragrance-container">
                <div className="fragrance-content">
                    <Category
                        image="/images/perf.jpg"
                        title="Designer perfume"
                        price="$310"
                        span="625"
                        tag="-25"
                        cart={<BsCart3 size={25} />}
                    />
                </div>

                <div className="fragrance-content">
                    <Category
                        image="/images/perfume.jpg"
                        title="Special perfume"
                        price="$610"
                        span="825"
                        tag="-45"
                        cart={<BsCart3 size={25} />}
                    />
                </div>
            </div>

            <Customer />
        </section>
    );
};

export default Fragrance;
