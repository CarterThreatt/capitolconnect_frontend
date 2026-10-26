import "./Hero.css";

// size is "hero-large" (home page) or "hero-small" (every other page)
const Hero = (props) => {
    return (
        <section className={"hero " + props.size}>
            <img src={props.src} alt={props.alt} />
            <div className="hero-text">
                <p className="hero-eyebrow">{props.eyebrow}</p>
                <h1 className="hero-title">{props.title}</h1>
                <p className="hero-subtitle">{props.subtitle}</p>
            </div>
        </section>
    );
};

export default Hero;
