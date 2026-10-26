import "./GalleryCard.css";

// linkText and linkUrl are only used by the cards that have a button
const GalleryCard = (props) => {
    return (
        <section className="one gallery-card">
            <img src={props.src} alt={props.alt} />
            <div className="gallery-card-body">
                <h4>{props.title}</h4>
                <p>{props.text}</p>
                <a className="gallery-card-link" href={props.linkUrl} target="_blank" rel="noreferrer">{props.linkText}</a>
            </div>
        </section>
    );
};

export default GalleryCard;
