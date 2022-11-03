import React from "react";
import { RiCloseLine } from "react-icons/ri";
import "./cart.css";
const Cart = () => {
    return (
        <section id="cart">
            <div className="cart-container">
                <div className="cart-content">
                    <table>
                        <thead>
                            <tr>
                                <td>Remove</td>
                                <td>Image</td>
                                <td>Product</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Subtotal</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <button>
                                        <RiCloseLine
                                            size={25}
                                            color="red"
                                        />
                                    </button>
                                </td>

                                <td>
                                    <img
                                        src="images/gold.jpg"
                                        id="cart-img"
                                        alt="cloth"
                                    />
                                </td>

                                <td>gold bold lotion</td>

                                <td>$100</td>

                                <td>
                                    <input
                                        type="number"
                                        value="1"
                                        id="quantity"
                                    />
                                </td>
                                <td>$100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="check-out-container">
                <div className="checks-out">
                    <div className="check-out-content ">
                        <h3>Apply coupon</h3>
                        <input
                            id="apply"
                            placeholder="Enter your coupon"
                        />

                        <button className="buttin">Apply</button>
                    </div>

                    <div className="checkout-items">
                        <h3>Cart total</h3>
                        <div className="subtotal">
                            <div className="cart-sub">
                                <p>Cart subtotal</p>
                            </div>
                            <div className="amt">
                                <p>$100</p>
                            </div>
                        </div>

                        <div className="delivery">
                            <div className="shipping">
                                <p>Shipping</p>
                            </div>
                            <div className="free">
                                <p>Free</p>
                            </div>
                        </div>

                        <div className="tot">
                            <div className="tot-amt">
                                <p>Total</p>
                            </div>
                            <div className="money">
                                <p>$100</p>
                            </div>
                        </div>
                        <div className="proceed">
                            <button>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
