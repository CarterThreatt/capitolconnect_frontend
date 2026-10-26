import "./EmailTemplate.css";
import "../button/Button.css";
import ButtonLink from "../button/ButtonLink";

// The copy button is just for looks until we learn to use the clipboard in React
const EmailTemplate = () => {
    return (
        <div className="email-template">
            <h4>WHAT TO PUT IN THE EMAIL</h4>
            <pre>{`Subject: Capitol tour request - [last name] [date]

Preferred Date:
Backup Dates:
Group Size:
Number of Guest:
Number of Children:
Phone and Email:
Tours Requested:`}</pre>
            <p>Make sure to put the date in the subject line and allow a full week for a responce.</p>
            <div className="email-template-buttons">
                <button className="button">Copy this template</button>
                <ButtonLink to="/contact" text="Use the contact form" />
            </div>
        </div>
    );
};

export default EmailTemplate;
