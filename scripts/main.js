// Toggle navigation menu for mobile view
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll to the events section when "Learn More" is clicked
const learnMoreBtn = document.querySelector('.btn-learn-more');
const eventsSection = document.querySelector('.events');

learnMoreBtn.addEventListener('click', () => {
    eventsSection.scrollIntoView({ behavior: 'smooth' });
});
// Handle Register button click
const registerBtn = document.querySelector('#registerBtn');

registerBtn.addEventListener('click', () => {
    alert('Redirecting to registration page...');
    // Perform the redirection, for example:
    window.location.href = 'https://nsut.ac.in/registration'; // Example link
});
