import sanitizeHtml from "sanitize-html";

const sanitizeInput = (value) => {
    return sanitizeHtml(value.trim(), {
        allowedTags: [],
        allowedAttributes: {},
    });
};

export default sanitizeInput;