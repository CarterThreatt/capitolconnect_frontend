import "./MonumentDialog.css";
import { API_URL } from "../../config";
import Dialog from "../dialog/Dialog";
import Badge from "../feature-card/Badge";
import FeatureDetail from "../feature-card/FeatureDetail";
import Callout from "../callout/Callout";
import Button from "../button/Button";

// Shows everything about one stop. Some stops have more to show than others
const MonumentDialog = (props) => {
    const monument = props.monument;

    const details = [
        { label: "HOURS", value: monument.hours },
        { label: "TICKETS", value: monument.tickets },
        { label: "NEAREST METRO", value: monument.metro },
        { label: "TIME NEEDED", value: monument.time_needed }
    ].filter((detail) => detail.value);

    return (
        <Dialog eyebrow={monument.category} title={monument.name} closeDialog={props.closeDialog}>
            <img className="monument-dialog-image" src={API_URL + "/images/" + monument.img_name} alt={monument.img_alt} />

            {monument.badges && (
                <div className="monument-dialog-badges">
                    {monument.badges.map((badge) => (
                        <Badge key={badge} text={badge} />
                    ))}
                </div>
            )}

            <p className="monument-dialog-description">{monument.description}</p>

            <div className="monument-dialog-details">
                {details.map((detail) => (
                    <FeatureDetail key={detail.label} label={detail.label} value={detail.value} />
                ))}
            </div>

            {monument.callouts && monument.callouts.map((callout) => (
                <Callout key={callout} text={callout} />
            ))}

            {monument.link && (
                <p className="monument-dialog-link">
                    <Button text={monument.link.text} href={monument.link.url} />
                </p>
            )}
        </Dialog>
    );
};

export default MonumentDialog;
