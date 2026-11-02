import "./MapFrame.css";

const MapFrame = (props) => {
    return (
        <div className="map-frame">
            <iframe
                title={props.title}
                src={props.src}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen></iframe>
        </div>
    );
};

export default MapFrame;
