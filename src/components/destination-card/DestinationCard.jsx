import "./DestinationCard.css";
import { Link } from "react-router-dom";

const DestinationCard = (props) => {
    return (
        <div className="one destination-card">
            <Link to={props.to}>
                <img src={props.src} alt={props.alt} />
            </Link>
            <h3><Link to={props.to}>{props.title}</Link></h3>
            <p>{props.text}</p>
        </div>
    );
};

export default DestinationCard;
