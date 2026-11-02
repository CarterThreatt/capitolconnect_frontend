import "./FormField.css";

// type is "text", "email" or "textarea". value and onChange come from the form that uses it.
const FormField = (props) => {
    return (
        <label className="form-field">
            {props.label}
            {props.type == "textarea" ? (
                <textarea
                    name={props.name}
                    rows="6"
                    minLength="10"
                    required
                    value={props.value}
                    onChange={props.onChange}></textarea>
            ) : (
                <input
                    type={props.type}
                    name={props.name}
                    required
                    value={props.value}
                    onChange={props.onChange} />
            )}
        </label>
    );
};

export default FormField;
