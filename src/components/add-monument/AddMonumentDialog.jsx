import Dialog from "../dialog/Dialog";
import AddMonumentForm from "./AddMonumentForm";

// The pop up that holds the add form. onAdded passes the new stop up to the page.
const AddMonumentDialog = (props) => {
    return (
        <Dialog eyebrow="NEW STOP" title="Add a Stop to the Guide" closeDialog={props.closeDialog}>
            <AddMonumentForm onAdded={props.onAdded} />
        </Dialog>
    );
};

export default AddMonumentDialog;
