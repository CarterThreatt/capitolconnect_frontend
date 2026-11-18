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

// The list of monuments. It has the same shape as the json file from Part 7,
// so later it can be read from the json file instead of being typed here.
const monuments = [
    {
        id: 1,
        name: "Lincoln Memorial",
        src: lincoln,
        alt: "Lincoln Memorial at night",
        section: "start-here",
        category: "PRESIDENTIAL",
        filters: ["presidential", "open24", "tickets"],
        badges: ["OPEN 24 HOURS", "NO TICKETS", "UNDERCROFT: TICKETS REQUIRED"],
        description: "Go after 9 p.m. — the crowds thin, the chamber is lit, and the walk back down the Mall is the best view in the city.",
        hours: "24 Hours, 9:30 am - 10 pm",
        metro: "Foggy Bottom - 20 min walk",
        time: "20-30 mins",
        callouts: [
            "New: the Lincoln Memorial Undercroft opened June 25, 2026. This 15,000 square foot exhibit space sits under the memorial among the concrete columns that hold it up, with interactive exhibits on how it was built and what it has meant. It is open 9 a.m. to 9 p.m. from March to October and 9 a.m. to 8 p.m. from November to February.",
            "Undercroft tickets are free and timed, with a $1 service fee if you reserve ahead. Tickets for the day 30 days out are released at 11 a.m. Eastern on recreation.gov. Same-day tickets are handed out at the Korean War Veterans Memorial kiosk starting at 8:45 a.m. You can stay up to 2 hours."
        ],
        linkText: "Reserve Undercroft Tickets",
        linkUrl: "https://www.recreation.gov/ticket/facility/10113318"
    },
    {
        id: 2,
        name: "Washington Monument",
        src: washington,
        alt: "Washington Monument",
        section: "start-here",
        category: "PRESIDENTIAL",
        filters: ["presidential", "tickets"],
        badges: ["TICKETS REQUIRED"],
        description: "Free timed tickets drop at 10 a.m. daily on recreation.gov and are gone in minutes.",
        hours: "9am - 5pm",
        metro: "Smithsonian",
        time: "30-45 mins",
        callouts: []
    },
    {
        id: 3,
        name: "Jefferson Memorial",
        src: jefferson,
        alt: "Jefferson Memorial",
        section: "start-here",
        category: "PRESIDENTIAL",
        filters: ["presidential", "open24"],
        badges: ["OPEN 24 HOURS", "NO TICKETS"],
        description: "The furthest walk of the four, and the only one worth renting a bike for in peak bloom.",
        hours: "24 hours",
        metro: "Smithsonian",
        time: "30-45 mins",
        callouts: []
    },
    {
        id: 4,
        name: "World War II Memorial",
        src: wwii,
        alt: "World War II Memorial",
        section: "start-here",
        category: "WAR MEMORIAL",
        filters: ["war"],
        badges: ["NO TICKETS"],
        description: "Sits directly between Lincoln and the Monument, nobody plans for it but you will walk through it.",
        hours: "9am - 5pm",
        metro: "Smithsonian",
        time: "30-45 mins",
        callouts: []
    },
    {
        id: 5,
        name: "Martin Luther King, Jr. Memorial",
        src: mlk,
        alt: "Martin Luther King, Jr. Memorial",
        section: "district",
        category: "IMPORTANT FIGURES",
        filters: ["open24"],
        description: "On the Tidal Basin loop between Lincoln and Jefferson.",
        hours: "24 Hours",
        tickets: "No Ticket",
        time: "20 Mins"
    },
    {
        id: 6,
        name: "Korean War Veterans Memorial",
        src: korean,
        alt: "Korean War Veterans Memorial",
        section: "district",
        category: "WAR MEMORIAL",
        filters: ["war", "open24"],
        description: "Best in rain or fog — the statues were built for it.",
        hours: "24 Hours",
        tickets: "No Ticket",
        time: "20 Mins"
    },
    {
        id: 7,
        name: "Vietnam Veterans Memorial",
        src: vietnam,
        alt: "Vietnam Veterans Memorial",
        section: "district",
        category: "WAR MEMORIAL",
        filters: ["war", "open24"],
        description: "Rangers will help you find a name — ask at the kiosk.",
        hours: "24 Hours",
        tickets: "No Ticket",
        time: "20 Mins"
    },
    {
        id: 8,
        name: "Albert Einstein Memorial",
        src: einstein,
        alt: "Albert Einstein Memorial",
        section: "district",
        category: "IMPORTANT FIGURES",
        filters: ["open24"],
        description: "You're allowed to climb into his lap — the one statue in D.C. you can touch.",
        hours: "24 Hours",
        tickets: "No Ticket",
        time: "5 Mins"
    },
    {
        id: 9,
        name: "Ulysses S. Grant Memorial",
        src: grant,
        alt: "Ulysses S. Grant Memorial",
        section: "district",
        category: "MILITARY",
        filters: ["open24"],
        description: "Where the loop starts. Largest equestrian statue in the country.",
        hours: "24 Hours",
        tickets: "No Ticket",
        time: "20 Mins"
    },
    {
        id: 10,
        name: "Franklin D. Roosevelt Memorial",
        src: fdr,
        alt: "Franklin D. Roosevelt Memorial",
        section: "district",
        category: "PRESIDENT",
        filters: ["presidential", "open24"],
        description: "Four outdoor rooms; allow more time than you think.",
        hours: "24 Hours",
        tickets: "No Ticket",
        time: "30-40 Mins"
    },
    {
        id: 11,
        name: "District of Columbia War Memorial",
        src: dcWar,
        alt: "District of Columbia War Memorial",
        section: "district",
        category: "WAR MEMORIAL",
        filters: ["war", "open24"],
        description: "Tucked in the trees off the main path; almost always empty.",
        hours: "24 Hours",
        tickets: "No Ticket",
        time: "5 Mins"
    },
    {
        id: 12,
        name: "Marine Corps War Memorial",
        src: marine,
        alt: "Marine Corps War Memorial",
        section: "district",
        category: "WAR MEMORIAL",
        filters: ["war", "open24"],
        description: "Off the loop in Arlington — pair it with the cemetery, not the Mall.",
        hours: "24 Hours",
        tickets: "No Ticket",
        time: "10 Mins"
    }
];

export default monuments;
