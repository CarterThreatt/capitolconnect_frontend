import "./CrossCta.css";
import { Link } from "react-router-dom";

const CrossCta = (props) => {
    return (
        <section className="cross-cta">
            <div>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <Link className="cross-cta-button" to={props.to}>{props.buttonText}</Link>
        </section>
    );
};

export default CrossCta;
