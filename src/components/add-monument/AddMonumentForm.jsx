import "./AddMonumentForm.css";
import "../button/Button.css";
import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../config";
import FormField from "../contact-form/FormField";
import FormResult from "../contact-form/FormResult";
import ImagePicker from "./ImagePicker";
import validateMonument, { categories } from "./validateMonument";

const emptyValues = {
    name: "",
    category: "",
    hours: "",
    time_needed: "",
    tickets: "",
    description: ""
};

const AddMonumentForm = (props) => {
    const [values, setValues] = useState(emptyValues);
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [resultType, setResultType] = useState("");
    const [resultText, setResultText] = useState("");
    // changing this number makes a brand new photo picker, which clears the old photo
    const [pickerNumber, setPickerNumber] = useState(0);

    // one function for every text box, the box's name says which value to change
    const changeValue = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const pickFile = (picked) => {
        setFile(picked);
        setErrors({ ...errors, img: "" });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        // check everything on this page first, the server checks again with Joi - in class
        const foundErrors = validateMonument(values, file);
        setErrors(foundErrors);

        if (Object.keys(foundErrors).length > 0) {
            setResultType("error");
            setResultText("Please fix the fields marked in red and try again.");
            return;
        }

        setSending(true);
        setResultType("pending");
        setResultText("Adding the stop...");

        const formData = new FormData();
        formData.append("name", values.name.trim());
        formData.append("category", values.category);
        formData.append("hours", values.hours.trim());
        formData.append("time_needed", values.time_needed.trim());
        formData.append("tickets", values.tickets.trim());
        formData.append("description", values.description.trim());
        formData.append("image", file);

        try {
            // the server answers with the new stop (it has the _id and the img_name)
            const response = await axios.post(API_URL + "/api/monuments", formData);

            props.onAdded(response.data);
            setResultType("success");
            setResultText("Thank you! " + values.name.trim() + " was added to The Rest of The District above.");
            setValues(emptyValues);
            setFile(null);
            setPickerNumber(pickerNumber + 1);
        } catch (error) {
            setResultType("error");
            const message = error.response && error.response.data;
            if (typeof message == "string" && message.length > 0 && message.length < 200 && !message.includes("<")) {
                // the short Joi message from the server (an html error page is not shown)
                setResultText("The server said no: " + message);
            } else {
                setResultText("Sorry, the stop could not be added. Please try again.");
            }
        }

        setSending(false);
    };

    return (
        <form className="add-monument-form" onSubmit={submitForm} noValidate>
            <FormField label="Name of the stop" name="name" type="text" value={values.name} error={errors.name} onChange={changeValue} />

            <div className="add-monument-row">
                <FormField label="Category" name="category" type="select" options={categories} value={values.category} error={errors.category} onChange={changeValue} />
                <FormField label="Hours" name="hours" type="text" value={values.hours} error={errors.hours} onChange={changeValue} />
            </div>

            <div className="add-monument-row">
                <FormField label="Tickets" name="tickets" type="text" value={values.tickets} error={errors.tickets} onChange={changeValue} />
                <FormField label="Time needed" name="time_needed" type="text" value={values.time_needed} error={errors.time_needed} onChange={changeValue} />
            </div>

            <FormField label="Description" name="description" type="textarea" rows="4" value={values.description} error={errors.description} onChange={changeValue} />

            <ImagePicker key={pickerNumber} label="Photo" error={errors.img} onPick={pickFile} />

            <div className="add-monument-actions">
                <button type="submit" className="button add-monument-submit" disabled={sending}>Add This Stop</button>
                <FormResult type={resultType} text={resultText} />
            </div>
        </form>
    );
};

export default AddMonumentForm;
