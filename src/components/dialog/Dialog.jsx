import "./Dialog.css";
import { useEffect } from "react";

// The pop up box that the dialogs in this site share: the dark background, the white
// box, the X and the title. The things inside the box are passed in as children.
// closeDialog tells the page to hide it again.
const Dialog = (props) => {
    // Escape closes it, and the page behind it stays still while it is open
    useEffect(() => {
        document.onkeydown = (e) => {
            if (e.key == "Escape") {
                props.closeDialog();
            }
        };
        document.body.style.overflow = "hidden";

        return () => {
            document.onkeydown = null;
            document.body.style.overflow = "";
        };
    }, [props]);

    // only a click on the dark background closes it, a click inside the white box does not
    const clickBackground = (e) => {
        if (e.target == e.currentTarget) {
            props.closeDialog();
        }
    };

    return (
        <div className="dialog" onClick={clickBackground}>
            <div className="dialog-box" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
                <button type="button" className="dialog-close" aria-label="Close" onClick={props.closeDialog}>&times;</button>
                <p className="dialog-eyebrow">{props.eyebrow}</p>
                <h2 id="dialog-title">{props.title}</h2>
                {props.children}
            </div>
        </div>
    );
};

export default Dialog;
