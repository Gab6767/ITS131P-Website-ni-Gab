// Navigates the browser to a specific HTML page
function navigateTo(pageUrl) {
    window.location.href = pageUrl;
}

// Intercepts form submission to redirect to the instruction pages
function handleFormSubmit(event, nextRoute) {
    event.preventDefault(); // Prevents the default form refresh
    navigateTo(nextRoute);  // Redirects to the target page
}