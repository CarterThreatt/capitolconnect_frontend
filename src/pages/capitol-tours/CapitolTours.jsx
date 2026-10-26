import "./CapitolTours.css";
import Hero from "../../components/hero/Hero";
import SectionHeading from "../../components/section-heading/SectionHeading";
import CompareTable from "../../components/compare-table/CompareTable";
import CompareRow from "../../components/compare-table/CompareRow";
import Step from "../../components/step/Step";
import Button from "../../components/button/Button";
import EmailTemplate from "../../components/email-template/EmailTemplate";
import SecurityBox from "../../components/security-box/SecurityBox";
import GalleryCard from "../../components/gallery-card/GalleryCard";
import Callout from "../../components/callout/Callout";
import CrossCta from "../../components/cross-cta/CrossCta";
import heroPic from "../../components/hero/images/page-hero.jpg";
import rotunda from "./images/rotunda.jpg";
import statuaryHall from "./images/statuary-hall.jpg";
import crypt from "./images/the-crypt.jpg";

const CapitolTours = () => {
    return (
        <main id="capitol-tours" className="page">
            <Hero
                size="hero-small"
                src={heroPic}
                alt="U.S. Capitol building"
                title="Capitol Tours"
                subtitle="Two different tours, two different processes. Most visitors request the wrong one — here's how to pick and how to ask." />

            <section id="tour-table" className="content-section">
                <SectionHeading
                    title="Which tour do you actually want?"
                    intro={'Every constituent asks for "a tour of the Capitol." These are the two things that phrase can mean.'} />
                <CompareTable>
                    <CompareRow
                        type="compare-header"
                        label=""
                        cells={["Staff-led tour", "Visitors Center Tour"]} />
                    <CompareRow
                        label="Who leads it"
                        cells={["An intern or staffer from your Member's office", "A trained visitors center tour guide"]} />
                    <CompareRow
                        label="How you book"
                        cells={["Online form or emailing your Member's DC office.", "Self service portal at: visitthecapitol.gov"]} />
                    <CompareRow
                        label="When to request"
                        cells={["2-4 weeks minimum; 3 months during spring and summer", "Up to 6 months out. Same day is typically possible."]} />
                    <CompareRow
                        label="Group Size"
                        cells={["Typically just your group! Sometime merged with other small groups from your district.", "40-50 people per group."]} />
                    <CompareRow
                        label="Group Size"
                        cells={["Personalized and unique tour that changes based on your interest and stops that the visitors center skips.", "Orientation film, Crypt, Rotunda and Statuary Hall"]} />
                    <CompareRow
                        label="Best For"
                        cells={["Most visitors - start here", "Last-minute or walk-up visits"]} />
                </CompareTable>
            </section>

            <section id="how-to-request" className="content-section content-section-alt">
                <SectionHeading title="How to request a staff-led tour" />
                <div className="columns">
                    <div className="two">
                        <ol className="steps-stacked">
                            <Step
                                number="1"
                                title="Find your member's D.C. office"
                                text={'House.gov and Senate.gov both have a "find your representative" lookup. Use the Washington office, not the district one.'}>
                                <Button text="Lookup House Member" href="https://www.house.gov/representatives/find-your-representative" />
                                <Button text="Lookup Senator" href="https://www.senate.gov/senators/senators-contact.htm" />
                            </Step>
                            <Step
                                number="2"
                                title="Send one request email"
                                text="Preferred date, two backup dates, group size, number of guest, number of children." />
                            <Step
                                number="3"
                                title="Confirm the day before"
                                text="Most staff-led tours start inside the Member's office in a House Office Building, not on the Capitol steps." />
                        </ol>
                    </div>
                    <div className="one">
                        <EmailTemplate />
                    </div>
                </div>
            </section>

            <section id="on-the-day" className="content-section">
                <div className="columns">
                    <div className="one">
                        <SectionHeading title="Security Details" />
                        <SecurityBox
                            title="BRING"
                            items={["Real ID or passport", "Phone, wallet, keys", "Confirmation email", "Comfortable Shoes"]} />
                        <SecurityBox
                            title="DON'T BRING"
                            items={["Food, drinks, aerosols", "Signs", "Pocket Knives", "Anything you'd have to check"]} />
                        <p className="button-row">
                            <Button text="Full Prohibited Items List" href="https://www.uscp.gov/sites/evo-subsites/uscp.house.gov/files/evo-media-document/prohibited-items-list-graphic-vertical_1.pdf" />
                        </p>
                    </div>
                    <div className="one">
                        <SectionHeading title="What you'll actually see" />
                        <div className="columns">
                            <GalleryCard
                                src={rotunda}
                                alt="The Rotunda"
                                title="The Rotunda"
                                text="Every tour stops here. It may be crowded, but it is breathtaking." />
                            <GalleryCard
                                src={statuaryHall}
                                alt="Statuary Hall"
                                title="Statuary Hall"
                                text="Ask your guide about the whisper tunnels." />
                            <GalleryCard
                                src={crypt}
                                alt="The Crypt"
                                title="The Crypt"
                                text="The center point all DC addresses count from." />
                        </div>
                        <Callout text="Gallery Passes for the house and senate chambers are separate. Request them from the same office in your initial email." />
                    </div>
                </div>
            </section>

            <CrossCta
                title="Want to visit the White House too?"
                text="Same office, entirely different timeline — start that request at least three months out."
                to="/white-house-tours"
                buttonText="White House Tours" />
        </main>
    );
};

export default CapitolTours;
