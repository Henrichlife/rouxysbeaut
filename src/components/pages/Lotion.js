import "./lotion.css";
import Category from "./Category";
import Section from "./Section";
import { BsCart3 } from "react-icons/bs";
import Customer from "./Customer";

const Lotion = () => {
    return (
        <section id="lotion">
            <Section
                heading="/images/settube.jpg"
                title="Body Lotion"
                children="Moisturizing for you skin"
            />

            <div className="lotion-container">
                <div className="lotion-content">
                    <Category
                        image="/images/y.jpg"
                        title="YB lotion"
                        price="$100"
                        span="$150"
                        tag="-5%"
                        cart={<BsCart3 />}
                    />

                    <Category
                        image="/images/gold.jpg"
                        title="Gold lotion"
                        price="$110"
                        span="$170"
                        tag="-9%"
                        cart={<BsCart3 />}
                    />
                </div>
            </div>

            <Customer />
        </section>
    );
};

export default Lotion;
