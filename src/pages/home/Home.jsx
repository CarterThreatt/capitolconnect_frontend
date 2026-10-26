import "./Home.css";
import Hero from "../../components/hero/Hero";
import SectionHeading from "../../components/section-heading/SectionHeading";
import DestinationCard from "../../components/destination-card/DestinationCard";
import Step from "../../components/step/Step";
import heroPic from "./images/hero.jpg";
import monumentsPic from "./images/monuments.jpg";
import capitolPic from "./images/capitol-tours.jpg";
import whitehousePic from "./images/white-house-tours.jpg";
import smithsonianPic from "./images/smithsonian.jpg";

const Home = () => {
    return (
        <main id="home" className="page">
            <Hero
                size="hero-large"
                src={heroPic}
                alt="Aerial sunset view of the U.S. Capitol and Washington, D.C. skyline"
                eyebrow="A VISITOR'S GUIDE TO WASHINGTON, D.C"
                title="Get inside the buildings you came to see"
                subtitle="Tours, timelines and the real process -- compiled by a former congressional tour coordinator" />

            <section id="destinations" className="content-section content-section-alt">
                <SectionHeading title="Four Destinations, one unique process each" />
                <div className="columns">
                    <DestinationCard
                        to="/monuments-and-memorials"
                        src={monumentsPic}
                        alt="Lincoln Memorial and Washington Monument at sunset"
                        title="Monuments & Memorials"
                        text="Photos, hours, and ticket links for every stop on the National Mall." />
                    <DestinationCard
                        to="/capitol-tours"
                        src={capitolPic}
                        alt="U.S. Capitol building with cherry blossoms"
                        title="Capitol Tours"
                        text="Staff lead vs. public tours and how to request each." />
                    <DestinationCard
                        to="/white-house-tours"
                        src={whitehousePic}
                        alt="The White House with fountain and gardens"
                        title="White House Tours"
                        text="Request window, screening details and day of logistics." />
                    <DestinationCard
                        to="/smithsonian"
                        src={smithsonianPic}
                        alt="Smithsonian Institution Building with cherry blossoms"
                        title="Smithsonian Institution"
                        text="Locations, timing, special exhibits and tickets." />
                </div>
            </section>

            <section id="timeline" className="content-section">
                <SectionHeading title="How you should actually plan your DC trip" />
                <ol className="steps columns">
                    <Step
                        theme="step-on-dark"
                        number="1"
                        title="Pick Your Dates"
                        text="Choose when you will visit the nation’s Capitol. Ideally you should start planning no less than 5 months in advance." />
                    <Step
                        theme="step-on-dark"
                        number="2"
                        title="Send the request"
                        text="Reach out to your Representative or Senator as far out as possible, but no less than 90 days prior to your trip. Some tours can be scheduled in less than 90 days, but 3 months is best!" />
                    <Step
                        theme="step-on-dark"
                        number="3"
                        title="Check your email"
                        text="Many top destinations in DC require background screening to visit. These these details are almost entirely requested through email. A missed email can lead to a missed tour!" />
                    <Step
                        theme="step-on-dark"
                        number="4"
                        title="Show up prepared"
                        text="Bring a Real ID or passport. Many DC attractions now require them for entry! Pack and wear comfortable shoes, when walking between tours and attractions your feet will thank you!" />
                </ol>
            </section>
        </main>
    );
};

export default Home;
