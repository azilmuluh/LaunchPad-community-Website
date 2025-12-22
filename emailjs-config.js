// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

const EMAILJS_CONFIG = {
    PUBLIC_KEY: "cSuM6Hw9qRPe53rjW",
    SERVICE_ID: "service_6ec00fw",
    TEMPLATES: {
        CONTACT: "contact_template",
        BLOG: "template_qtfjjzq",
        APPLICATION: "application_template",
        SPONSORSHIP: "template_sponsorship"
    }
};

// Initialize EmailJS when the page loads
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("cSuM6Hw9qRPe53rjW");
        console.log('EmailJS initialized successfully');
    } else {
        console.error('EmailJS library not loaded');
    }
})();

// Example usage in your forms:
/*
emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATES.CONTACT, {
    to_email: 'LaunchPadCommunity00@gmail.com',
    from_name: 'John Doe',
    from_email: 'john@example.com',
    message: 'This is a test message'
});
*/