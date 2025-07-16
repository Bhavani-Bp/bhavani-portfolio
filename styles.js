function contactMe() {
  window.location.href = "mailto:yourname@example.com";
}

const phoneToggleBtn = document.getElementById('phone-toggle-btn');

phoneToggleBtn.addEventListener('click', () => {
  const isPressed = phoneToggleBtn.getAttribute('aria-pressed') === 'true';
  phoneToggleBtn.setAttribute('aria-pressed', String(!isPressed));
  if (!isPressed) {
    phoneToggleBtn.textContent = '📴'; // Phone off icon
    // Add any additional functionality for phone ON state here
  } else {
    phoneToggleBtn.textContent = '📱'; // Phone on icon
    // Add any additional functionality for phone OFF state here
  }
});
