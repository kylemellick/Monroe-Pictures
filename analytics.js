
// Basic analytics script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Analytics script loaded successfully.');
    // Sample user tracking functionality
    document.body.addEventListener('click', (event) => {
        console.log(`User clicked on: ${event.target.tagName}`);
    });
});
