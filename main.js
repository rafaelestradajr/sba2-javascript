document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript Loaded");
    // Add event listeners and other JS code here
    // Get the form element
const form = document.querySelector('contact-form');

// Add an event listener to the reset button
form.addEventListener('reset', function() {
  // Reset the form values
  form.reset();
});
});

function displayAboutSection() {
  const aboutSelect = document.getElementById('aboutSelect');
  const aboutContent = document.getElementById('aboutContent');

  // Clear previous content
  aboutContent.innerHTML = '';

  // Get selected value
  const selectedValue = aboutSelect.value;

  // Display corresponding content based on the selected value
  if (selectedValue === 'company') {
      aboutContent.innerHTML = '<h2>About Company</h2>A company profile is your brand professional introduction to your audience. It is meant to inform visitors and prospects on your products, services, and current positioning in the market. A well crafted company profile is a way to make yourself stand out from the competition and offer how you are unique.<p></p>';
  } else if (selectedValue === 'team') {
      aboutContent.innerHTML = '<h2>About Our Team</h2><p>Our team consists of skilled professionals dedicated to providing top-quality service. In any industry where the people behind a company are as important as the company itself, you’re likely to find a kind of expanded “about” page that includes information on individual employees. “Meet the Team” pages are popular among web design and other creative firms, but are also found on sites within various other industries. These pages are a valuable addition to any site where human contact is an important part of the industry. It adds a personal touch to the company and can lend trust to visitors.</p>';
  } else if (selectedValue === 'careers') {
      aboutContent.innerHTML = '<h2>Careers</h2><p>Join our team! We offer a dynamic work environment with opportunities for growth. We use technology more than ever these days to connect with friends and family, stay up to date on the latest and greatest happenings in the world, and sometimes just to pass the time. With all the computers, tablets, smartphones and other high-tech devices society depends on, we need the skills of technology professionals. U.S. News Best Technology Jobs of 2024 are high-paying and boast low unemployment rates.</p>';
  } else {
      aboutContent.innerHTML = '<p>Please select a section to learn more about us.</p>';
  }
}

