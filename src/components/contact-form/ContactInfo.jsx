import "./ContactInfo.css";
import ButtonLink from "../button/ButtonLink";

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <p>Tell me your travel dates and the size of your group so I can point you to the right place on this site.</p>
            <p>Capitol tour requests are sent to your own Representative or Senator's office, not through this form. The Capitol Tours page has an email template you can copy.</p>
            <p><ButtonLink to="/capitol-tours" text="Capitol Tours" /></p>
        </div>
    );
};

export default ContactInfo;
