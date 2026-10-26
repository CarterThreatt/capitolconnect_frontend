import "./FormField.css";

// type is "text", "email" or "textarea"
const FormField = (props) => {
    return (
        <label className="form-field">
            {props.label}
            {props.type == "textarea" ? (
                <textarea rows="6"></textarea>
            ) : (
                <input type={props.type} />
            )}
        </label>
    );
};

export default FormField;
