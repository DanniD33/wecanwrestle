function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
  document.getElementById("intcan").innerHTML = "100";
}

// Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

const form = document.getElementById('form');
const modal = document.getElementById('myModal');
let shouldSubmit = false;

form.addEventListener('submit', function(e) {
  if (!shouldSubmit) {
    e.preventDefault(); // Stop the default submission
    modal.style.display = 'flex'; // Show the modal
  }
});

document.getElementById('confirmBtn').addEventListener('click', function() {
  shouldSubmit = true;
  modal.style.display = 'none';
  form.submit(); // Programmatically submit
});

function closeModal() {
  modal.style.display = 'none';
}











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



//Send registration data
async function sendData(data) {
  // Construct a FormData instance
  const formData = new FormData();

  // Add a text field
  formData.append("name", "Pomegranate");

  // Add a file
  const selection = await window.showOpenFilePicker();
  if (selection.length > 0) {
    const file = await selection[0].getFile();
    formData.append("file", file);
  }

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

const send = document.querySelector("#send");
send.addEventListener("click", sendData);




// //register attendee
// const fetchDataFromServer = () => {

  
//   // Example POST method implementation:
//   async function postData() {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData("http://localhost:3000/user/${email}", 
//   // postData("http://localhost:3211/user/${email}", 
//   // postData("https://www.watch10.net/user/${email}", 
//   {
//     headers: 
//     {
//       "content-type": "application/json; charset= UTF-8"
//     },
//     body: 
//     {
//       email: req.body.email, 
//       password: req.body.password 
//     },
    
//     method: "POST"
//   })
  
  
//   .then((data) => {
//     // console.log(data)
//     return data.json(); // JSON data parsed by `data.json()` call
//   })
//   .then(res => {console.log(res)})
//   .catch(error => console.log(error));
// }
 

// module.exports = fetchDataFromServer;