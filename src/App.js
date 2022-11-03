import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/pages/About";
import Body from "./components/pages/Body";
import Cart from "./components/pages/Cart";

import Footer from "./components/pages/Footer";
import Fragrance from "./components/pages/Fragrance";

// routes pages
import { Home } from "./components/pages/Home";
import Lips from "./components/pages/Lips";
import Login from "./components/pages/Login";
import Lotion from "./components/pages/Lotion";
import Makeup from "./components/pages/Makeup";
import Nails from "./components/pages/Nails";
import Navbar from "./components/pages/Navbar";
import Notfound from "./components/pages/Notfound";
import Product from "./components/pages/Product";
import Treatment from "./components/pages/Treatment";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route index element={<Home />} />
                <Route path="Fragrance" element={<Fragrance />} />
                <Route path="Body" element={<Body />} />
                <Route path="/Nails" element={<Nails />} />
                <Route path="/About" element={<About />} />
                <Route path="/Lips" element={<Lips />} />
                <Route path="/Makeup" element={<Makeup />} />
                <Route path="/Lotion" element={<Lotion />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="Treatment" element={<Treatment />} />
                <Route path="Product" element={<Product />} />
                <Route path="Login" element={<Login />} />

                <Route path="*" element={<Notfound />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default App;
