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

    if (res.ok) {
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




//Play picture carousel
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




//Add Calendar
var Cal = function(divId) {

  //Store div id
  this.divId = divId;

  // Days of week, starting on Sunday
  this.DaysOfWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  // Months, stating on January
  this.Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

  // Set the current month, year
  var d = new Date();

  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDay = d.getDate();

};

// Goes to next month
Cal.prototype.nextMonth = function() {
  if ( this.currMonth == 11 ) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  }
  else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};

// Goes to previous month
Cal.prototype.previousMonth = function() {
  if ( this.currMonth == 0 ) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  }
  else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

// Show current month
Cal.prototype.showcurr = function() {
  this.showMonth(this.currYear, this.currMonth);
};

// Show month (year, month)
Cal.prototype.showMonth = function(y, m) {

  var d = new Date()
  // First day of the week in the selected month
  , firstDayOfMonth = new Date(y, m, 1).getDay()
  // Last day of the selected month
  , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
  // Last day of the previous month
  , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();


  var html = '<table>';

  // Write selected month and year
  html += '<thead><tr>';
  html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
  html += '</tr></thead>';


  // Write the header of the days of the week
  html += '<tr class="days">';
  for(var i=0; i < this.DaysOfWeek.length;i++) {
    html += '<td>' + this.DaysOfWeek[i] + '</td>';
  }
  html += '</tr>';

  // Write the days
  var i=1;
  do {

    var dow = new Date(y, m, i).getDay();

    // If Sunday, start new row
    if ( dow == 0 ) {
      html += '<tr>';
    }
    // If not Sunday but first day of the month
    // it will write the last days from the previous month
    else if ( i == 1 ) {
      html += '<tr>';
      var k = lastDayOfLastMonth - firstDayOfMonth+1;
      for(var j=0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    // Write the current day in the loop
    var chk = new Date();
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
    if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
      html += '<td class="today">' + i + '</td>';
    } else {
      html += '<td class="normal">' + i + '</td>';
    }
    // If Saturday, closes the row
    if ( dow == 6 ) {
      html += '</tr>';
    }
    // If not Saturday, but last day of the selected month
    // it will write the next few days from the next month
    else if ( i == lastDateOfMonth ) {
      var k=1;
      for(dow; dow < 6; dow++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    i++;
  }while(i <= lastDateOfMonth);

  // Closes table
  html += '</table>';

  // Write HTML to the div
  document.getElementById(this.divId).innerHTML = html;
};

// On Load of the window
window.onload = function() {

  // Start calendar
  var c = new Cal("divCal");			
  c.showcurr();

  // Bind next and previous button clicks
  getId('btnNext').onclick = function() {
    c.nextMonth();
  };
  getId('btnPrev').onclick = function() {
    c.previousMonth();
  };
}

// Get element by id
function getId(id) {
  return document.getElementById(id);
}