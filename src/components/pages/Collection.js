import React from "react";
import { Link } from "react-router-dom";
import "./collection.css";
import images from "../../index3.json";

const Collection = () => {
    return (
        <section id="collection">
            <div className="container-content">
                <div className="page-view">
                    <div className="page-right">
                        <h1>Collection</h1>
                    </div>

                    <div className="page-left">
                        <Link to="Product">View All</Link>
                    </div>
                </div>

                <div className="page-content">
                    <div className="page-items">
                        {images &&
                            images.map((items) => {
                                return (
                                    <div
                                        key={items.id}
                                        className="hover"
                                    >
                                        <img
                                            className="coll-item"
                                            src={items.images}
                                            alt="cream"
                                        />

                                        <p>
                                            <span>{items.span}</span>
                                            {items.price}
                                        </p>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collection;
// <section className="collection">
//     <div className="container">
//         <div className="side-content">
//             <div className="right">
//                 <h1>Collection</h1>
//             </div>

//             <div className="left">
//                 <Link to="#">View All</Link>
//             </div>
//         </div>

//         <div className="main-content">
//             {images &&
//                 images.map((item) => {
//                     return (
//                         <div
//                             className="coll-cont"
//                             key={item.id}
//                         >
//                             <img
//                                 className="coll-item"
//                                 src={item.images}
//                                 alt="cream"
//                             />

//                             <p>
//                                 <span>{item.span}</span>
//                                 {item.price}
//                             </p>
//                         </div>
//                     );
//                 })}
//         </div>
//     </div>
