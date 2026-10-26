import "./LoopCta.css";

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
                    <img src={props.src} alt={props.alt} />
                </div>
            </div>
        </section>
    );
};

export default LoopCta;
