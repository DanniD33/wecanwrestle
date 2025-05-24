//open up the contact modal

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("contact-modal");
  const contactBtn = document.querySelector(".contact");
  const closeBtn = document.querySelector(".closec");

  contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
