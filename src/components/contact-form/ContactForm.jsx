import "./ContactForm.css";
import "../button/Button.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import FormField from "./FormField";
import FormResult from "./FormResult";

const accessKey = "2801a341-751d-4df1-9259-048a80687f3d";

// wait a moment so the "Sending..." message can be read
const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [resultText, setResultText] = useState("");
    const [resultType, setResultType] = useState("");

    // Sends the message to Web3Forms. The page never changes, the answer shows right here.
    const sendForm = async () => {
        const formData = new FormData();
        formData.append("access_key", accessKey);
        formData.append("subject", "New message from the Capitol Compass site");
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        return response.json();
    };

    const submitForm = async (e) => {
        e.preventDefault();
        setSending(true);
        setResultType("pending");
        setResultText("Sending your message...");

        try {
            const [data] = await Promise.all([sendForm(), wait(1000)]);

            if (data.success) {
                setResultType("success");
                setResultText("Thank you! Your message was sent and I will get back to you soon.");
                toast.success("Message sent!");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setResultType("error");
                setResultText("Sorry, your message could not be sent. Please try again.");
                toast.error("Message not sent.");
            }
        } catch (error) {
            setResultType("error");
            setResultText("Sorry, something went wrong with the connection. Please try again.");
            toast.error("Message not sent.");
        }

        setSending(false);
    };

    return (
        <form className="contact-form" onSubmit={submitForm}>
            <FormField label="Name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <FormField label="Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormField label="Message" name="message" type="textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
            <div className="contact-form-actions">
                <button type="submit" className="button contact-form-submit" disabled={sending}>Send Message</button>
                <FormResult type={resultType} text={resultText} />
            </div>
            <Toaster
                position="bottom-center"
                toastOptions={{ style: { background: "#10213b", color: "#fbfaf7" } }} />
        </form>
    );
};

export default ContactForm;
