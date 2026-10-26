import "./SecurityBox.css";
import SecurityItem from "./SecurityItem";

const SecurityBox = (props) => {
    return (
        <div className="security-box">
            <h4>{props.title}</h4>
            <ul>
                {props.items.map((item) => (
                    <SecurityItem key={item} text={item} />
                ))}
            </ul>
        </div>
    );
};

export default SecurityBox;
