import Hero from "../../components/hero/Hero";
import StatBox from "../../components/stat-box/StatBox";
import SectionHeading from "../../components/section-heading/SectionHeading";
import CompareTable from "../../components/compare-table/CompareTable";
import CompareRow from "../../components/compare-table/CompareRow";
import Callout from "../../components/callout/Callout";
import Step from "../../components/step/Step";
import Button from "../../components/button/Button";
import FeatureCard from "../../components/feature-card/FeatureCard";
import SecurityBox from "../../components/security-box/SecurityBox";
import CrossCta from "../../components/cross-cta/CrossCta";
import heroPic from "../../components/hero/images/page-hero.jpg";
import castle from "./images/smithsonian-castle.jpg";

const Smithsonian = () => {
    return (
        <main id="smithsonian" className="page">
            <Hero
                size="hero-small"
                src={heroPic}
                alt="Smithsonian museums"
                title="Smithsonian Museums"
                subtitle="Every Smithsonian museum in D.C. is free, but three of them still need a pass. Here is which ones, when to book, and what to expect at the door." />

            <section id="quick-facts" className="content-section">
                <div className="columns">
                    <StatBox
                        number="Free"
                        text="Admission to every Smithsonian museum in D.C. is free. Only Cooper Hewitt in New York charges." />
                    <StatBox
                        number="3 Passes"
                        text="Air and Space, African American History and Culture, and the National Zoo need a free pass for every visitor, kids included." />
                    <StatBox
                        number="10-5:30"
                        text="Most museums are open every day from 10 a.m. to 5:30 p.m. and close only on December 25." />
                    <StatBox
                        number="Screening"
                        text="Expect a bag check at the door, and metal detectors at the big museums on the Mall." />
                </div>
            </section>

            <section id="pass-table" className="content-section content-section-alt">
                <SectionHeading
                    title="Which museums need a pass?"
                    intro="Most Smithsonian museums are walk-in. These are the five visitors ask about most, and three of them are not." />
                <CompareTable>
                    <CompareRow
                        type="compare-header"
                        label=""
                        cells={["Pass needed?", "Hours", "Don't miss"]} />
                    <CompareRow
                        label="Air and Space"
                        cells={[
                            "Yes. A free timed-entry pass for every visitor.",
                            "10 a.m. to 5:30 p.m. daily",
                            "The 1903 Wright Flyer and the Apollo 11 command module. Some galleries are still closed for renovation."
                        ]} />
                    <CompareRow
                        label="African American History and Culture"
                        cells={[
                            "Yes. A free timed-entry pass for every visitor.",
                            "10 a.m. to 5:30 p.m. Tuesday to Sunday, noon on Monday. Last entry 4 p.m.",
                            "The History Galleries, which take about 2 hours. Eat before you go in."
                        ]} />
                    <CompareRow
                        label="National Zoo"
                        cells={[
                            "Yes. A free entry pass for everyone, infants included.",
                            "8 a.m. to 4 p.m. Last entry 3 p.m.",
                            "The giant pandas and the Asian elephants."
                        ]} />
                    <CompareRow
                        label="Natural History"
                        cells={[
                            "No. Just walk in.",
                            "10 a.m. to 5:30 p.m. daily",
                            "The Hope Diamond and the dinosaurs in the Fossil Hall."
                        ]} />
                    <CompareRow
                        label="American History"
                        cells={[
                            "No. Just walk in.",
                            "10 a.m. to 5:30 p.m. daily",
                            "The Star-Spangled Banner. Photos are not allowed in that gallery."
                        ]} />
                </CompareTable>
                <Callout text="All of these close on December 25. Hours and gallery closures change, so check the museum's own page the week you go." />
            </section>

            <section id="get-passes" className="content-section">
                <SectionHeading
                    title="How to get your passes"
                    note="Passes are free, but they run out" />
                <ol className="steps columns">
                    <Step
                        number="1"
                        eyebrow="ABOUT 2 MONTHS OUT"
                        title="Air and Space"
                        text="Passes are released on the first of each month at noon Eastern, about two months ahead. Reserve as soon as your dates open.">
                        <Button text="Reserve Passes" href="https://airandspace.si.edu/visit/museum-dc" />
                    </Step>
                    <Step
                        number="2"
                        eyebrow="30 DAYS OUT"
                        title="African American History and Culture"
                        text="Advance passes release 30 days ahead. More are released online at 8:15 a.m. Eastern each day for same-day visits.">
                        <Button text="Reserve Passes" href="https://nmaahc.si.edu/passes" />
                    </Step>
                    <Step
                        number="3"
                        eyebrow="ANYTIME BEFORE"
                        title="National Zoo"
                        text="Entry passes are free and required for everyone. Parking is paid, and it costs more on the day than if you buy it in advance.">
                        <Button text="Reserve Passes" href="https://nationalzoo.si.edu/passes" />
                    </Step>
                    <Step
                        number="4"
                        eyebrow="THE DAY OF"
                        title="Arrive on time"
                        text="Your pass is scanned at the door. Do not arrive before the entry time printed on it, and plan for a line at security." />
                </ol>
            </section>

            <section id="the-castle" className="content-section content-section-alt">
                <SectionHeading title="The building on every postcard" />
                <FeatureCard
                    src={castle}
                    alt="Smithsonian Institution Building with cherry blossoms"
                    badges={["CLOSED FOR RENOVATION"]}
                    category="SMITHSONIAN INSTITUTION BUILDING"
                    title="The Castle"
                    description="Completed in 1855, this is the red building most people picture when they hear Smithsonian. It is closed for its first major renovation in more than 50 years, so you can admire it from the Mall but not go inside. Check si.edu for the reopening date, and start with the museums above instead."
                    details={[
                        { label: "STATUS", value: "Closed" },
                        { label: "ADDRESS", value: "1000 Jefferson Drive SW" },
                        { label: "NEAREST METRO", value: "Smithsonian" }
                    ]}
                    callouts={[]} />
            </section>

            <section id="before-you-go" className="content-section">
                <SectionHeading
                    title="Before you go"
                    note="Every museum screens bags at the door" />
                <div className="columns">
                    <div className="one">
                        <SecurityBox
                            title="BRING"
                            items={[
                                "Your timed pass, if the museum needs one",
                                "A small bag. Bags are hand-checked or X-rayed, so less is faster.",
                                "A military ID if you served. African American History and Culture admits veterans and active duty without a pass."
                            ]} />
                    </div>
                    <div className="one">
                        <SecurityBox
                            title="DON'T BRING"
                            items={[
                                "Firearms",
                                "Knives, scissors, screwdrivers and other sharp objects",
                                "Pepper spray or Mace",
                                "Signs, placards or banners"
                            ]} />
                    </div>
                </div>
                <p>
                    <Button text="Full Entry & Guidelines" href="https://www.si.edu/visit/guidelines" />
                </p>
            </section>

            <CrossCta
                title="Walking the Mall anyway?"
                text="The museums sit between the Capitol and the monuments. Pair a pass-free museum with a stop at the memorials for an easy afternoon."
                to="/monuments-and-memorials"
                buttonText="Monuments & Memorials" />
        </main>
    );
};

export default Smithsonian;
