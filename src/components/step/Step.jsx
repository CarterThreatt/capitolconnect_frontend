import "./Step.css";

// theme is "step-on-dark" when the step sits on the navy background
const Step = (props) => {
    return (
        <li className={"one step " + (props.theme || "")}>
            <span className="step-number">{props.number}</span>
            <span className="step-eyebrow">{props.eyebrow}</span>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <p className="step-links">{props.children}</p>
        </li>
    );
};

export default Step;
