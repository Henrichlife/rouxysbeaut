import "./Testimony.css";
import { useState } from "react";
import testimonies from "../folders/Imagedata";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
const Testimony = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [index, setIndex] = useState(0);
    const { avatar, quote } = testimonies[index];

    const handleClick = () => {
        setIndex((prev) => prev + 1);
        if (index >= testimonies.length - 1) {
            setIndex(0);
        }
    };

    const nextClick = () => {
        setIndex((prev) => prev - 1);
        if (index <= 0) {
            setIndex(testimonies.length - 1);
        }
    };

    return (
        <section>
            <div className="testimony-container">
                <div
                    className="testimony-content "
                    data-aos="zoom-in-up"
                >
                    <h1>Testimonies</h1>
                    <img src={avatar} alt="girl" />
                    <aside>{quote}</aside>
                    <button className="next" onClick={handleClick}>
                        <AiOutlineLeft />
                    </button>
                    <button className="prev" onClick={nextClick}>
                        <AiOutlineRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimony;
