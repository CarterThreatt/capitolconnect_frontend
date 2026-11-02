import "./LandmarkCard.css";
import ZoomImage from "../zoom-image/ZoomImage";

const LandmarkCard = (props) => {
    return (
        <section className="one landmark-card">
            <ZoomImage src={props.src} alt={props.alt} />
            <div className="landmark-card-body">
                <p className="landmark-card-category">{props.category}</p>
                <h3>{props.title}</h3>
                <p className="landmark-card-description">{props.description}</p>
                <p className="landmark-card-meta">{props.hours} - {props.tickets} - {props.time}</p>
            </div>
        </section>
    );
};

export default LandmarkCard;
