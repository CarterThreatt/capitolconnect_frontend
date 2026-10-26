import "./SectionHeading.css";

const SectionHeading = (props) => {
    return (
        <div className="section-heading">
            <div className="section-heading-row">
                <h2>{props.title}</h2>
                <p className="section-note">{props.note}</p>
            </div>
            <p className="section-intro">{props.intro}</p>
        </div>
    );
};

export default SectionHeading;
