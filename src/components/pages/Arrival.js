import React from "react";
import { arrival } from "./Proddata";
import "./product.css";

const Arrival = () => {
    return (
        <section>
            <div className="new-arrival">
                {arrival.map((items) => {
                    return (
                        <div
                            className="arrival-content"
                            key={items.id}
                        >
                            <img src={items.images} alt="bottle" />
                            <p className="tag">{items.name}</p>

                            <div className="product-info">
                                <div className="price">
                                    <p>{items.price}</p>
                                </div>
                                <div className="product-cart">
                                    {items.cart}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Arrival;
