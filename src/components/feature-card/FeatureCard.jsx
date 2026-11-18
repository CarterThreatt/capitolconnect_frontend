import "./FeatureCard.css";
import ZoomImage from "../zoom-image/ZoomImage";
import Badge from "./Badge";
import FeatureDetail from "./FeatureDetail";
import Callout from "../callout/Callout";
import Button from "../button/Button";

const FeatureCard = (props) => {
    return (
        <section className="feature-card">
            <ZoomImage src={props.src} alt={props.alt} />
            <div className="feature-card-body">
                <div className="feature-card-badges">
                    {props.badges.map((badge) => (
                        <Badge key={badge} text={badge} />
                    ))}
                </div>
                <p className="feature-card-category">{props.category}</p>
                <h3>{props.title}</h3>
                <p className="feature-card-description">{props.description}</p>
                <div className="feature-card-details">
                    {props.details.map((detail) => (
                        <FeatureDetail key={detail.label} label={detail.label} value={detail.value} />
                    ))}
                </div>
                {props.callouts.map((callout) => (
                    <Callout key={callout} text={callout} />
                ))}
                <div className="feature-card-actions">
                    {props.linkText && <Button text={props.linkText} href={props.linkUrl} />}
                    <button type="button" className="feature-card-details-button" onClick={props.onOpen}>View Details</button>
                </div>
            </div>
        </section>
    );
};

export default FeatureCard;
