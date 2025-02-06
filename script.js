function showCertificateModal(event, modalId) {
  console.log('Showing modal:', modalId);
  const modal = document.getElementById(modalId);
  if (!modal) {
    console.log('Modal not found:', modalId);
    return;
  }
  
  // Position the modal to the right of the certificate
  const rect = event.target.getBoundingClientRect();
  modal.style.left = '110%';  // Position just to the right
  modal.style.top = '50%';    // Align with middle of certificate
  modal.style.transform = 'translateY(-50%)';  // Center vertically
  
  modal.classList.add('visible');
}

function hideCertificateModal() {
  console.log('Hiding modals');
  const modals = document.querySelectorAll('.certificate-modal');
  modals.forEach(modal => modal.classList.remove('visible'));
}

// Add theme toggle functionality
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
});
