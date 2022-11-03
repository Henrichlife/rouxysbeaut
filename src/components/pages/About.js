import React from "react";
import Section from "./Section";
import "./About.css";

const About = () => {
    return (
        <section>
            <Section
                heading="/images/wemen.jpeg"
                title="#ABOUT US"
                children="For all beautiful women all over the world"
            />
            <div className="about-container">
                <div className="about-content">
                    <p className="text">
                        Ada is a Nigerian lady, proud of her heritage
                        and unwilling to compromise on her true
                        identity. “Over the years, I have learned that
                        true beauty comes from loving and expressing
                        ourselves as we are, and not from struggling
                        towards perfection. Confidence is where true
                        beauty starts. After 12 years of intensive
                        research in the cosmetic industry in Germany,
                        I was inspired to create an inclusive makeup
                        line that remedies fundamental inadequacies
                        for women who look like me; this is why I
                        decided, through Janettotty, to make quality
                        products available that would suit similar
                        skin tones and be easily accessible across
                        Europe and Africa. I deeply believe that every
                        colored woman should be able to find the right
                        makeup that matches her skin tone and projects
                        her personal style, without having to
                        compromise, sacrifice quality, lose time
                        mixing and matching, or break the bank.
                        Rouxybeaut makeup line is designed to
                        accentuate your natural beauty, not conceal
                        it; and I am committed to helping every
                        colored woman feel confident and beautiful. I
                        will forever stand by those values no matter
                        what.“ With rouxybeaut, there are no more
                        excuses preventing you from radiating; it is
                        time to find your perfect match!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
