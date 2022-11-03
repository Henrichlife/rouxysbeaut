import "./section.css";

const Section = ({ heading, title, children }) => {
    return (
        <div className="section-head">
            <div className="section-content">
                <img src={heading} alt="pics" />

                <h1>{title}</h1>
                <p>{children}</p>
            </div>
        </div>
    );
};

export default Section;
