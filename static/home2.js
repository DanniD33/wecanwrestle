let shouldSubmit = false;
const form = document.getElementById("registerForm");
const modal = document.getElementById("myModal"); // your modal wrapper
const confirmBtn = document.getElementById("confirmBtn");
const parentNameInput = document.getElementById("sname"); // input inside modal
const close = document.getElementById("closeModal");
const exit = document.getElementById("exitModal");
const messageDiv = document.createElement("div");
messageDiv.id = "message";
form.appendChild(messageDiv);


// messageDiv.className = "message";
// form.parentNode.insertBefore(messageDiv, form);



form.addEventListener("submit", function(e) {
  if (!shouldSubmit) {
    e.preventDefault(); // Stop default submission
    modal.style.display = "flex"; // Show modal
  }
});



close.addEventListener("click", function () {
  modal.style.display = "none";
});

exit.addEventListener("click", function () {
  modal.style.display = "none";
});




//Check is waiver is agreed and signature is present

confirmBtn.addEventListener("click", async function () {
  let waiver = document.querySelector('input[name="waiver"]:checked');
  const parentName = parentNameInput.value.trim();



  if (!waiver || waiver.value !== "true" || sname === "" || !parentName) {
    alert("Please agree to the waiver and enter your full name.");
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

    if (result.ok) {
      messageDiv.textContent = result.message || "Registration successful!";
      messageDiv.className = "message success";
      

      setTimeout(() => {
        form.reset();
        messageDiv.textContent = "";
        messageDiv.className = "";
      }, 3000);
    } else {
      messageDiv.textContent = result.error || "Registration failed.";
      messageDiv.className = "message error";
    }
  } catch (error) {
    messageDiv.textContent = "Network error. Please try again.";
    messageDiv.className = "message error";
  }

  shouldSubmit = false; // Reset for next submission
  
  
  
 waiver = req.body.waiver === 'true';

  const sessions = [
    "Session 1 (5:30PM - 6:30PM)",
    "Session 2 (6:45PM - 7:45PM)"
  ];
  
  let currentIndex = 0;
  const sessionInput = document.getElementById("session");

  document.getElementById("prevSession").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + sessions.length) % sessions.length;
    sessionInput.value = sessions[currentIndex];
  });

  document.getElementById("nextSession").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % sessions.length;
    sessionInput.value = sessions[currentIndex];
  });
});





// Get element by id
function getId(id) {
  return document.getElementById(id);
}



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



// const crypto = require('crypto');
// const algorithm = 'aes-256-cbc';
// const key = crypto.randomBytes(32); // Store securely
// const iv = crypto.randomBytes(16);  // Store securely

// function encrypt(text) {
//   const cipher = crypto.createCipheriv(algorithm, key, iv);
//   let encrypted = cipher.update(text, 'utf8', 'hex');
//   encrypted += cipher.final('hex');
//   return encrypted;
// }
