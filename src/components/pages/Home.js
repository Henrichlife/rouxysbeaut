import React from "react";

import "./Header.css";
import Navigator from "../folders/Navigator";
import Header from "./Header";
import Collection from "./Collection";
import Shop from "./Shop";
import Discount from "./Discount";
import Newsletter from "./Newsletter";
import Testimony from "./Testimony";

export const Home = () => {
    return (
        <>
            <Navigator />
            <Header />
            <Collection />
            <Shop />
            <Discount />
            <Newsletter />
            <Testimony />
        </>
    );
};
