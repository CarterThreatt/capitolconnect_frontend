import "./MonumentsAndMemorials.css";
import { useState } from "react";
import Hero from "../../components/hero/Hero";
import FilterBar from "../../components/filter-bar/FilterBar";
import SectionHeading from "../../components/section-heading/SectionHeading";
import Slideshow from "../../components/slideshow/Slideshow";
import FeatureCard from "../../components/feature-card/FeatureCard";
import LandmarkCard from "../../components/landmark-card/LandmarkCard";
import MapFrame from "../../components/map-frame/MapFrame";
import LoopCta from "../../components/loop-cta/LoopCta";
import heroPic from "../../components/hero/images/page-hero.jpg";
import walkingMap from "./images/walking-map.png";
import monuments from "./monuments";

const MonumentsAndMemorials = () => {
    const [filter, setFilter] = useState("all");

    // the monuments that match the button that is picked in the filter bar
    const shown = monuments.filter((monument) => filter == "all" || monument.filters.includes(filter));
    const startHere = shown.filter((monument) => monument.section == "start-here");
    const district = shown.filter((monument) => monument.section == "district");

    return (
        <main id="monuments" className="page">
            <Hero
                size="hero-small"
                src={heroPic}
                alt="Lincoln Memorial reflecting pool at sunset"
                title="Monuments & Memorials"
                subtitle="Photos, hours, nearest Metro, and ticket links for every stop on the Mall — plus when it's best to go." />

            <FilterBar selected={filter} onSelect={setFilter} />

            <section id="start-here" className="content-section">
                <SectionHeading title="Start Here: the four you can't skip" />
                {startHere.length == 0 ? (
                    <p className="no-results">None of the four match this filter. Look in The Rest of The District below.</p>
                ) : (
                    <Slideshow key={filter}>
                        {startHere.map((monument) => (
                            <FeatureCard
                                key={monument.id}
                                src={monument.src}
                                alt={monument.alt}
                                badges={monument.badges}
                                category={monument.category}
                                title={monument.name}
                                description={monument.description}
                                details={[
                                    { label: "HOURS", value: monument.hours },
                                    { label: "NEAREST METRO", value: monument.metro },
                                    { label: "TIME NEEDED", value: monument.time }
                                ]}
                                callouts={monument.callouts}
                                linkText={monument.linkText}
                                linkUrl={monument.linkUrl} />
                        ))}
                    </Slideshow>
                )}
            </section>

            <section id="rest-of-district" className="content-section content-section-alt">
                <SectionHeading title="The Rest of The District" />
                {district.length == 0 ? (
                    <p className="no-results">None of the other stops match this filter.</p>
                ) : (
                    <div className="columns district-list">
                        {district.map((monument) => (
                            <LandmarkCard
                                key={monument.id}
                                src={monument.src}
                                alt={monument.alt}
                                category={monument.category}
                                title={monument.name}
                                description={monument.description}
                                hours={monument.hours}
                                tickets={monument.tickets}
                                time={monument.time} />
                        ))}
                    </div>
                )}
            </section>

            <section id="map-section" className="content-section">
                <SectionHeading title="Find every stop on the map" />
                <div className="columns">
                    <div className="two">
                        <MapFrame
                            title="Google map of the National Mall and its memorials"
                            src="https://maps.google.com/maps?q=National+Mall,+Washington,+DC&z=14&output=embed" />
                    </div>
                    <div className="one map-info">
                        <h3>How to use the map</h3>
                        <p>Drag and zoom to see how the stops connect along the Mall. The Capitol sits at the east end and the Lincoln Memorial at the west end.</p>
                        <p>The Marine Corps War Memorial is the one stop that is not on the Mall. It is across the Potomac River in Arlington, so plan a separate trip for it.</p>
                    </div>
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
