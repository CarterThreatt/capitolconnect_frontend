import "./MonumentsAndMemorials.css";
import Hero from "../../components/hero/Hero";
import FilterBar from "../../components/filter-bar/FilterBar";
import SectionHeading from "../../components/section-heading/SectionHeading";
import FeatureCard from "../../components/feature-card/FeatureCard";
import LandmarkCard from "../../components/landmark-card/LandmarkCard";
import LoopCta from "../../components/loop-cta/LoopCta";
import heroPic from "../../components/hero/images/page-hero.jpg";
import lincoln from "./images/lincoln-memorial.jpg";
import washington from "./images/washington-monument.jpg";
import jefferson from "./images/jefferson-memorial.jpg";
import wwii from "./images/wwii-memorial.jpg";
import mlk from "./images/mlk-memorial.jpg";
import korean from "./images/korean-war-memorial.jpg";
import vietnam from "./images/vietnam-veterans-memorial.jpg";
import einstein from "./images/einstein-memorial.jpg";
import grant from "./images/grant-memorial.jpg";
import fdr from "./images/fdr-memorial.jpg";
import dcWar from "./images/dc-war-memorial.jpg";
import marine from "./images/marine-corps-war-memorial.jpg";
import walkingMap from "./images/walking-map.png";

// Later these cards will be built from the monuments json file
const MonumentsAndMemorials = () => {
    return (
        <main id="monuments" className="page">
            <Hero
                size="hero-small"
                src={heroPic}
                alt="Lincoln Memorial reflecting pool at sunset"
                title="Monuments & Memorials"
                subtitle="Photos, hours, nearest Metro, and ticket links for every stop on the Mall — plus when it's best to go." />

            <FilterBar />

            <section id="start-here" className="content-section">
                <SectionHeading title="Start Here: the four you can't skip" />
                <FeatureCard
                    src={lincoln}
                    alt="Lincoln Memorial at night"
                    badges={["OPEN 24 HOURS", "NO TICKETS", "UNDERCROFT: TICKETS REQUIRED"]}
                    category="PRESIDENTIAL"
                    title="Lincoln Memorial"
                    description="Go after 9 p.m. — the crowds thin, the chamber is lit, and the walk back down the Mall is the best view in the city."
                    details={[
                        { label: "HOURS", value: "24 Hours, 9:30 am - 10 pm" },
                        { label: "NEAREST METRO", value: "Foggy Bottom - 20 min walk" },
                        { label: "TIME NEEDED", value: "20-30 mins" }
                    ]}
                    callouts={[
                        "New: the Lincoln Memorial Undercroft opened June 25, 2026. This 15,000 square foot exhibit space sits under the memorial among the concrete columns that hold it up, with interactive exhibits on how it was built and what it has meant. It is open 9 a.m. to 9 p.m. from March to October and 9 a.m. to 8 p.m. from November to February.",
                        "Undercroft tickets are free and timed, with a $1 service fee if you reserve ahead. Tickets for the day 30 days out are released at 11 a.m. Eastern on recreation.gov. Same-day tickets are handed out at the Korean War Veterans Memorial kiosk starting at 8:45 a.m. You can stay up to 2 hours."
                    ]}
                    linkText="Reserve Undercroft Tickets"
                    linkUrl="https://www.recreation.gov/ticket/facility/10113318" />
                <FeatureCard
                    src={washington}
                    alt="Washington Monument"
                    badges={["TICKETS REQUIRED"]}
                    category="PRESIDENTIAL"
                    title="Washington Monument"
                    description="Free timed tickets drop at 10 a.m. daily on recreation.gov and are gone in minutes."
                    details={[
                        { label: "HOURS", value: "9am - 5pm" },
                        { label: "NEAREST METRO", value: "Smithsonian" },
                        { label: "TIME NEEDED", value: "30-45 mins" }
                    ]}
                    callouts={[]} />
                <FeatureCard
                    src={jefferson}
                    alt="Jefferson Memorial"
                    badges={["OPEN 24 HOURS", "NO TICKETS"]}
                    category="PRESIDENTIAL"
                    title="Jefferson Memorial"
                    description="The furthest walk of the four, and the only one worth renting a bike for in peak bloom."
                    details={[
                        { label: "HOURS", value: "24 hours" },
                        { label: "NEAREST METRO", value: "Smithsonian" },
                        { label: "TIME NEEDED", value: "30-45 mins" }
                    ]}
                    callouts={[]} />
                <FeatureCard
                    src={wwii}
                    alt="World War II Memorial"
                    badges={["NO TICKETS"]}
                    category="WAR MEMORIAL"
                    title="World War II Memorial"
                    description="Sits directly between Lincoln and the Monument, nobody plans for it but you will walk through it."
                    details={[
                        { label: "HOURS", value: "9am - 5pm" },
                        { label: "NEAREST METRO", value: "Smithsonian" },
                        { label: "TIME NEEDED", value: "30-45 mins" }
                    ]}
                    callouts={[]} />
            </section>

            <section id="rest-of-district" className="content-section content-section-alt">
                <SectionHeading title="The Rest of The District" />
                <div className="columns district-list">
                    <LandmarkCard
                        src={mlk}
                        alt="Martin Luther King, Jr. Memorial"
                        category="IMPORTANT FIGURES"
                        title="Martin Luther King, Jr. Memorial"
                        description="On the Tidal Basin loop between Lincoln and Jefferson."
                        hours="24 Hours"
                        tickets="No Ticket"
                        time="20 Mins" />
                    <LandmarkCard
                        src={korean}
                        alt="Korean War Veterans Memorial"
                        category="WAR MEMORIAL"
                        title="Korean War Veterans Memorial"
                        description="Best in rain or fog — the statues were built for it."
                        hours="24 Hours"
                        tickets="No Ticket"
                        time="20 Mins" />
                    <LandmarkCard
                        src={vietnam}
                        alt="Vietnam Veterans Memorial"
                        category="WAR MEMORIAL"
                        title="Vietnam Veterans Memorial"
                        description="Rangers will help you find a name — ask at the kiosk."
                        hours="24 Hours"
                        tickets="No Ticket"
                        time="20 Mins" />
                    <LandmarkCard
                        src={einstein}
                        alt="Albert Einstein Memorial"
                        category="IMPORTANT FIGURES"
                        title="Albert Einstein Memorial"
                        description="You're allowed to climb into his lap — the one statue in D.C. you can touch."
                        hours="24 Hours"
                        tickets="No Ticket"
                        time="5 Mins" />
                    <LandmarkCard
                        src={grant}
                        alt="Ulysses S. Grant Memorial"
                        category="MILITARY"
                        title="Ulysses S. Grant Memorial"
                        description="Where the loop starts. Largest equestrian statue in the country."
                        hours="24 Hours"
                        tickets="No Ticket"
                        time="20 Mins" />
                    <LandmarkCard
                        src={fdr}
                        alt="Franklin D. Roosevelt Memorial"
                        category="PRESIDENT"
                        title="Franklin D. Roosevelt Memorial"
                        description="Four outdoor rooms; allow more time than you think."
                        hours="24 Hours"
                        tickets="No Ticket"
                        time="30-40 Mins" />
                    <LandmarkCard
                        src={dcWar}
                        alt="District of Columbia War Memorial"
                        category="WAR MEMORIAL"
                        title="District of Columbia War Memorial"
                        description="Tucked in the trees off the main path; almost always empty."
                        hours="24 Hours"
                        tickets="No Ticket"
                        time="5 Mins" />
                    <LandmarkCard
                        src={marine}
                        alt="Marine Corps War Memorial"
                        category="WAR MEMORIAL"
                        title="Marine Corps War Memorial"
                        description="Off the loop in Arlington — pair it with the cemetery, not the Mall."
                        hours="24 Hours"
                        tickets="No Ticket"
                        time="10 Mins" />
                </div>
            </section>

            <LoopCta
                eyebrow="WALK IT IN ONE AFTERNOON"
                title="The 3.5 mile loop, in the right order"
                text="Start at the Capitol steps, finish at Lincoln after dark. Every memorial above, no backtracking, about four hours with stops."
                src={walkingMap}
                alt="Map of the walking loop between the Capitol and the National Mall memorials" />
        </main>
    );
};

export default MonumentsAndMemorials;
