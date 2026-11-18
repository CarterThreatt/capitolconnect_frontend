import "./ImagePicker.css";
import { useState } from "react";

// Lets the user pick a photo and shows a small preview of it.
const ImagePicker = (props) => {
    const [previewUrl, setPreviewUrl] = useState("");

    const pickFile = (e) => {
        const file = e.target.files[0];
        props.onPick(file);

        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setPreviewUrl("");
        }
    };

    return (
        <div className={props.error ? "image-picker invalid" : "image-picker"}>
            <label className="image-picker-label">
                {props.label}
                <input type="file" name="image" accept="image/png, image/jpeg" onChange={pickFile} />
            </label>
            <span className="image-picker-hint">JPG or PNG, under 2 MB. A photo that is wider than it is tall looks best.</span>
            <span className="image-picker-error">{props.error}</span>
            {previewUrl && <img className="image-picker-preview" src={previewUrl} alt="Preview of the chosen photo" />}
        </div>
    );
};

export default ImagePicker;
