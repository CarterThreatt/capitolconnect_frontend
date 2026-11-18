import "./FormField.css";

// type is "text", "email", "textarea" or "select". value and onChange come from the form that uses it.
// The extras are optional: rows for a textarea, options for a select, error for a message under the box.
const FormField = (props) => {
    return (
        <label className={props.error ? "form-field invalid" : "form-field"}>
            {props.label}
            {props.type == "textarea" ? (
                <textarea
                    name={props.name}
                    rows={props.rows || "6"}
                    minLength="10"
                    required
                    value={props.value}
                    onChange={props.onChange}></textarea>
            ) : props.type == "select" ? (
                <select
                    name={props.name}
                    required
                    value={props.value}
                    onChange={props.onChange}>
                    <option value="">Choose one</option>
                    {props.options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            ) : (
                <input
                    type={props.type}
                    name={props.name}
                    required
                    value={props.value}
                    onChange={props.onChange} />
            )}
            <span className="form-field-error">{props.error}</span>
        </label>
    );
};

export default FormField;
