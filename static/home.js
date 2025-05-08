let shouldSubmit = false;
const form = document.getElementById("registerForm");
const modal = document.getElementById("myModal"); // your modal wrapper
const confirmBtn = document.getElementById("confirmBtn");
const parentNameInput = document.getElementById("sname"); // input inside modal
const messageDiv = document.createElement("div");
form.appendChild(messageDiv);


form.addEventListener("submit", function(e) {
  if (!shouldSubmit) {
    e.preventDefault(); // Stop default submission
    modal.style.display = "flex"; // Show modal
  }
});


confirmBtn.addEventListener("click", async function () {
  const parentName = parentNameInput.value.trim();

  if (!parentName) {
    alert("Please enter your full name to confirm consent.");
    return;
  }

  shouldSubmit = true;
  modal.style.display = "none";

  // Trigger the actual fetch submission
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  data.parentConsentName = parentName; // include parent's name in submission

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      messageDiv.textContent = result.message || "Registration successful!";
      messageDiv.className = "message success";
      form.reset();
    } else {
      messageDiv.textContent = result.error || "Registration failed.";
      messageDiv.className = "message error";
    }
  } catch (error) {
    messageDiv.textContent = "Network error. Please try again.";
    messageDiv.className = "message error";
  }

  shouldSubmit = false; // Reset for next submission
});









let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}