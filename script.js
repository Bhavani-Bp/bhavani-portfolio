function contactMe() {
  const email = "gadisettibhavaniprakash@gmail.com";
  const subject = "Message from Portfolio Visitor";
  const body = "Hi Bhavani Prakash,\n\nI came across your portfolio and would like to get in touch regarding [your reason here].\n\nBest regards,\n[Your Name]";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Try to open the email client
  window.location.href = mailtoLink;

  // Fallback: Check if the email client opened (after a short delay)
  setTimeout(() => {
    if (window.location.href.startsWith('http') || window.location.href.includes('mailto:')) {
      alert('Please ensure you have a default email client set up, or copy this email: ' + email + ' and send your message manually.');
    }
  }, 1000); // Delay of 1 second to check if the page redirected
}

const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});