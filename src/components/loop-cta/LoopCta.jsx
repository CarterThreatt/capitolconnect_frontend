import "./LoopCta.css";
import ZoomImage from "../zoom-image/ZoomImage";

const LoopCta = (props) => {
    return (
        <section className="loop-cta content-section">
            <div className="columns">
                <div className="two">
                    <p className="loop-cta-eyebrow">{props.eyebrow}</p>
                    <h2>{props.title}</h2>
                    <p className="loop-cta-text">{props.text}</p>
                </div>
                <div className="one">
                    <ZoomImage src={props.src} alt={props.alt} />
                </div>
            </div>
        </section>
    );
};

export default LoopCta;
