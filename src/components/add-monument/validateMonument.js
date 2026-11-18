// The categories a new stop can have. The form's drop down shows these.
export const categories = ["PRESIDENTIAL", "WAR MEMORIAL", "IMPORTANT FIGURES", "MILITARY"];

export const maxImageSize = 2 * 1024 * 1024;
export const imageTypes = ["image/jpeg", "image/png"];


const validateMonument = (values, file) => {
    const errors = {};

    const checkText = (field, label, min, max) => {
        const text = values[field].trim();
        if (text.length == 0) {
            errors[field] = label + " is required.";
        } else if (text.length < min) {
            errors[field] = label + " needs at least " + min + " characters.";
        } else if (text.length > max) {
            errors[field] = label + " can be at most " + max + " characters.";
        }

    };

    checkText("name", "Name", 3, 60);
    checkText("description", "Description", 10, 200);
    checkText("hours", "Hours", 3, 40);
    checkText("tickets", "Tickets", 2, 40);
    checkText("time_needed", "Time needed", 2, 30);

    if (!categories.includes(values.category)) {
        errors.category = "Pick a category.";
    }

    if (!file) {
        errors.img = "Add a photo of the stop.";
    } else if (!imageTypes.includes(file.type)) {
        errors.img = "The photo must be a JPG or a PNG.";
    } else if (file.size > maxImageSize) {
        errors.img = "The photo must be smaller than 2 MB.";
    }

    return errors;
};

export default validateMonument;
