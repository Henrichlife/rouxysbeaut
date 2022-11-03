import Customer from "./Customer";
import "./makeup.css";
import Section from "./Section";

const Makeup = () => {
    return (
        <section id="makeup">
            <Section
                heading="/images/collect.jpg"
                title="Best Makeup"
                children="explore all colors of makeup"
            />

            <div className="makeup-container">
                <div className="makeup-content">
                    <p id="tex">Out of stock check back few hours</p>
                </div>
            </div>

            <Customer />
        </section>
    );
};

export default Makeup;
