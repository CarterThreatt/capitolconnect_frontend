import "./WhiteHouseTours.css";
import Hero from "../../components/hero/Hero";
import SectionHeading from "../../components/section-heading/SectionHeading";
import StatBox from "../../components/stat-box/StatBox";
import Step from "../../components/step/Step";
import CompareTable from "../../components/compare-table/CompareTable";
import CompareRow from "../../components/compare-table/CompareRow";
import Callout from "../../components/callout/Callout";
import SecurityBox from "../../components/security-box/SecurityBox";
import Button from "../../components/button/Button";
import GalleryCard from "../../components/gallery-card/GalleryCard";
import CrossCta from "../../components/cross-cta/CrossCta";
import heroPic from "../../components/hero/images/page-hero.jpg";
import eastRoom from "./images/east-room.jpg";
import blueRoom from "./images/blue-room.jpg";
import stateDiningRoom from "./images/state-dining-room.jpg";
import peoplesHouse from "./images/peoples-house.jpg";
import visitorCenter from "./images/visitor-center.jpg";
import decaturHouse from "./images/decatur-house.jpg";

const WhiteHouseTours = () => {
    return (
        <main id="white-house-tours" className="page">
            <Hero
                size="hero-small"
                src={heroPic}
                alt="The White House"
                title="White House Tours"
                subtitle="The hardest ticket in Washington, and the one with the longest lead time. Here is the real timeline, the information they require, and what happens on the day." />

            <section id="date-info" className="content-section">
                <div className="columns">
                    <StatBox
                        number="21 Days"
                        text="Absolute minimum notice. Requests inside this window are not accepted by the Secret Service." />
                    <StatBox
                        number="3 Months"
                        text="This is when you should actually ask. Spring and summer months require this much time or more." />
                    <StatBox
                        number="Free"
                        text="No ticket is ever sold. Anyone who is trying to charge you is not the White House." />
                    <StatBox
                        number="Tue-Sat"
                        text="White House tours are only open Tuesday-Saturday. They are subject to cancellation with no notice." />
                </div>
            </section>

            <section id="request-timeline" className="content-section content-section-alt">
                <SectionHeading
                    title="The Request timeline, month by month"
                    note="Working backwards from your trip date" />
                <ol className="steps columns">
                    <Step
                        number="1"
                        eyebrow="3-6 MONTHS OUT"
                        title="Submit Request"
                        text="Through your Representative's or Senator's D.C. office. There is no public form issued by the White House." />
                    <Step
                        number="2"
                        eyebrow="WHEN REQUESTED"
                        title="Send Guest Details"
                        text="The United States Secret Service will conduct background screenings on all guests. The White House will send a form to collect each tour member's name, address and Social Security number. Passport numbers are acceptable for foreign nationals." />
                    <Step
                        number="3"
                        eyebrow="WEEKS OF SILENCE"
                        title="Background Screening"
                        text="This is the step that many people misread as rejection. The USSS will not update you on the status of your background check — you will only hear from them if they need additional information." />
                    <Step
                        number="4"
                        eyebrow="2 WEEKS TO 7 DAYS BEFORE"
                        title="Confirmation Lands"
                        text="Depending on request volume or other circumstances, your background screening will be complete between 2 weeks and 7 days before the requested tour." />
                </ol>
            </section>

            <section id="guest-info" className="content-section">
                <div className="columns">
                    <div className="one">
                        <SectionHeading title="What they need from every guest" />
                        <CompareTable>
                            <CompareRow label="Full legal name" cells={["As printed on valid REAL ID"]} />
                            <CompareRow label="Date of birth" cells={["Every guest, including minors"]} />
                            <CompareRow label="Citizenship" cells={["Country of citizenship"]} />
                            <CompareRow label="ID Number" cells={["SSN, or passport number for non-US persons"]} />
                            <CompareRow label="Contact for the group lead" cells={["Valid day-of phone number"]} />
                        </CompareTable>
                        <Callout text="A nickname, maiden name, or one missing birthday can stop the entire group's clearance. Check the spelling and details before you click submit." />
                    </div>
                    <div className="one">
                        <SectionHeading title="Security Details" />
                        <SecurityBox
                            title="BRING"
                            items={["Real ID or passport", "Phone, wallet, keys", "Confirmation email", "Comfortable Shoes"]} />
                        <SecurityBox
                            title="DON'T BRING"
                            items={["Food, drinks, aerosols", "Bags of any size. There is no bag check.", "Video cameras, selfie sticks"]} />
                        <p>
                            <Button text="Full Prohibited Items List" href="https://www.whitehouse.gov/visit/faqs/" />
                        </p>
                    </div>
                </div>
            </section>

            <section id="wh-rooms" className="content-section content-section-alt">
                <SectionHeading title="What you will see" />
                <div className="columns">
                    <GalleryCard
                        src={eastRoom}
                        alt="The East Room"
                        title="East Room"
                        text="The largest room in the house, used for press conferences, bill signings, and state dinners' after-dinner entertainment." />
                    <GalleryCard
                        src={blueRoom}
                        alt="The Blue Room"
                        title="Blue Room"
                        text="The oval room at the center of the State Floor, where guests are formally greeted and the official Christmas tree stands each December." />
                    <GalleryCard
                        src={stateDiningRoom}
                        alt="The State Dining Room"
                        title="State Dining Room"
                        text="Seats up to 140 for state dinners, with Lincoln's portrait over the mantel and John Adams's prayer for the house beneath it." />
                </div>
                <Callout text="White House tours are a self-guided experience. Most people spend about 45 minutes to an hour in the house. Photos are encouraged! Secret Service agents are stationed in every room and are extremely knowledgeable about its history — just ask them." />
            </section>

            <section id="cant-get-in" className="content-section">
                <SectionHeading title="If you can't get in" />
                <div className="columns">
                    <GalleryCard
                        src={peoplesHouse}
                        alt="The People's House exhibit"
                        title="The People's House"
                        text="A year-round museum experience dedicated to the story of the Executive Mansion, its inhabitants, and those who serve it. Passes are required for entry — reserve timed-entry passes in advance or try your luck with walk-up passes."
                        linkText="Reserve Passes"
                        linkUrl="https://thepeopleshouse.org/passes" />
                    <GalleryCard
                        src={visitorCenter}
                        alt="White House Visitor Center"
                        title="White House Visitor Center"
                        text="A free, no-request option with plenty of artifacts and one of the best gift shops in DC. It can get crowded, so early morning trips are best — a good stop even if you make it into the White House."
                        linkText="Get Directions"
                        linkUrl="https://www.google.com/maps/dir/?api=1&destination=White+House+Visitor+Center,+1450+Pennsylvania+Ave+NW,+Washington,+DC+20230" />
                    <GalleryCard
                        src={decaturHouse}
                        alt="Decatur House"
                        title="Decatur House"
                        text="The first private residence in the White House neighborhood, built in 1818. Requires a reservation. Decatur House sits on President's Park, adjacent to the White House north entrance."
                        linkText="Reserve Passes"
                        linkUrl="https://www.eventbrite.com/e/tour-the-historic-decatur-house-for-free-tickets-820178484927" />
                </div>
            </section>

            <CrossCta
                title="Want to visit the Capitol too?"
                text="Same office, same scheduler. Requesting the Capitol at the same time costs nothing and doubles your odds of getting in somewhere."
                to="/capitol-tours"
                buttonText="Capitol Tours" />
        </main>
    );
};

export default WhiteHouseTours;
