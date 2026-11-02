import "./Slideshow.css";
import { useState } from "react";
import SlideButton from "./SlideButton";
import Dot from "./Dot";

// Shows one slide at a time. The slides are whatever is put between the Slideshow tags.
const Slideshow = (props) => {
    const [index, setIndex] = useState(0);
    const count = props.children.length;

    const showNext = () => {
        setIndex((index + 1) % count);
    }

    const showPrevious = () => {
        setIndex((index - 1 + count) % count);
    }

    return (
        <div className="slideshow">
            {props.children[index]}
            <div className="slideshow-controls">
                <SlideButton text="‹ Prev" label="Previous stop" onClick={showPrevious} />
                <div className="slideshow-dots">
                    {props.children.map((slide, i) => (
                        <Dot
                            key={i}
                            number={i + 1}
                            active={i == index}
                            onClick={() => setIndex(i)} />
                    ))}
                </div>
                <SlideButton text="Next ›" label="Next stop" onClick={showNext} />
            </div>
        </div>
    );
};

export default Slideshow;
