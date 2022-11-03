import React from "react";
import Arrival from "./Arrival";

import { images } from "./Proddata";

import "./product.css";

const Product = () => {
    return (
        <section id="product">
            <h1>PRODUCTS</h1>
            <div className="product-container">
                {images &&
                    images.map((item) => {
                        return (
                            <div
                                className="product-content"
                                key={item.id}
                            >
                                <img src={item.images} alt="bottle" />
                                <p className="tag">{item.name}</p>
                                <small>{item.tag}</small>
                                <div className="product-info">
                                    <div className="price">
                                        <p>
                                            {item.price}
                                            <span>{item.span}</span>
                                        </p>
                                    </div>
                                    <div className="product-cart">
                                        {item.cart}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>

            <h1>New ARRIVAL</h1>

            <Arrival />
        </section>
    );
};

export default Product;
