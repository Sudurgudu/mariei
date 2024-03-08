// Get all the tab links
const tabLinks = document.querySelectorAll('.tabs h3 a');

// Get the tab content divs
const tabContents = document.querySelectorAll('.tabs-content > div');

// Function to show the corresponding tab content and hide the others
function showTab(evt, tabName) {
  // Remove active class from all tab links
  tabLinks.forEach(link => link.classList.remove('active'));

  // Remove active class from all tab contents
  tabContents.forEach(content => content.classList.remove('active'));

  // Add active class to the clicked tab link
  evt.currentTarget.classList.add('active');

  // Show the corresponding tab content
  document.getElementById(tabName).classList.add('active');
}

// Add click event listeners to the tab links
tabLinks.forEach(link => {
  link.addEventListener('click', evt => {
    evt.preventDefault(); // Prevent the default link behavior
    const tabName = evt.currentTarget.getAttribute('href').slice(1); // Get the tab name from the href attribute
    showTab(evt, tabName);
  });
});