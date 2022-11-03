import React from "react";
import { choice } from "./Customerdata";
import "./customer.css";

const Customer = () => {
    return (
        <section>
            <div className="customer-container">
                <h3>Customers most viewed</h3>
                <div className="customer-content">
                    {choice.map((items) => {
                        return (
                            <div
                                className="category-content "
                                key={items.id}
                            >
                                <img src={items.images} alt="item" />

                                <h4>{items.name}</h4>
                                <aside>{items.tag}</aside>
                                <div className="product-info">
                                    <div className="price">
                                        <p>
                                            {items.price}
                                            <span>{items.span}</span>
                                        </p>
                                    </div>
                                    <div className="product-cart">
                                        {items.cart}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Customer;
