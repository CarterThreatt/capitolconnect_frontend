import "./ZoomImage.css";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// A picture that opens big in a lightbox when you click it (React library: Yet Another React Lightbox)
const ZoomImage = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="zoom-image">
            <button className="zoom-image-button" onClick={() => setOpen(true)} aria-label={"Enlarge photo: " + props.alt}>
                <img src={props.src} alt={props.alt} />
            </button>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src: props.src, alt: props.alt }]}
            />
        </div>
    );
};

export default ZoomImage;
