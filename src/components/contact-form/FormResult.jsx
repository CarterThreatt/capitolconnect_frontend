import "./FormResult.css";

// type is "pending", "success" or "error". Empty text hides it.
const FormResult = (props) => {
    return (
        <p className={"form-result " + props.type} role="status" aria-live="polite">{props.text}</p>
    );
};

export default FormResult;
