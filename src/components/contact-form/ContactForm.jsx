import "./ContactForm.css";
import "../button/Button.css";
import FormField from "./FormField";

// The form does not send anything yet, we will wire it up in a later part
const ContactForm = () => {
    return (
        <form className="contact-form">
            <FormField label="Name" type="text" />
            <FormField label="Email" type="email" />
            <FormField label="Message" type="textarea" />
            <button type="button" className="button contact-form-submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
