import Hero from "../../components/hero/Hero";
import SectionHeading from "../../components/section-heading/SectionHeading";
import ContactForm from "../../components/contact-form/ContactForm";
import ContactInfo from "../../components/contact-form/ContactInfo";
import heroPic from "../../components/hero/images/page-hero.jpg";

const Contact = () => {
    return (
        <main id="contact" className="page">
            <Hero
                size="hero-small"
                src={heroPic}
                alt=""
                title="Contact Us"
                subtitle="Have a question about planning your D.C. trip? Send a message using the form below." />

            <section className="content-section">
                <div className="columns">
                    <div className="two">
                        <SectionHeading title="Send a message" />
                        <ContactForm />
                    </div>
                    <div className="one">
                        <SectionHeading title="Before you write" />
                        <ContactInfo />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
