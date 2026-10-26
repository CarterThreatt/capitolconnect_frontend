import "./Button.css";
import { Link } from "react-router-dom";

// A button that goes to another page of this site
const ButtonLink = (props) => {
    return (
        <Link className="button" to={props.to}>{props.text}</Link>
    );
};

export default ButtonLink;
