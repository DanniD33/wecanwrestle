// // ------------- VARIABLES ------------- //
// var ticking = false;
// var isFirefox = (/Firefox/i.test(navigator.userAgent));
// var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
// var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
// var slideDurationSetting = 600; //Amount of time for which slide is "locked"
// var currentSlideNumber = 0;
// var totalSlideNumber = $(".background").length;

// // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
// function parallaxScroll(evt) {
//   if (isFirefox) {
//     //Set delta for Firefox
//     delta = evt.detail * (-120);
//   } else if (isIe) {
//     //Set delta for IE
//     delta = -evt.deltaY;
//   } else {
//     //Set delta for all other browsers
//     delta = evt.wheelDelta;
//   }

//   if (ticking != true) {
//     if (delta <= -scrollSensitivitySetting) {
//       //Down scroll
//       ticking = true;
//       if (currentSlideNumber !== totalSlideNumber - 1) {
//         currentSlideNumber++;
//         nextItem();
//       }
//       slideDurationTimeout(slideDurationSetting);
//     }
//     if (delta >= scrollSensitivitySetting) {
//       //Up scroll
//       ticking = true;
//       if (currentSlideNumber !== 0) {
//         currentSlideNumber--;
//       }
//       previousItem();
//       slideDurationTimeout(slideDurationSetting);
//     }
//   }
// }

// // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
// function slideDurationTimeout(slideDuration) {
//   setTimeout(function() {
//     ticking = false;
//   }, slideDuration);
// }

// // ------------- ADD EVENT LISTENER ------------- //
// var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
// window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// // ------------- SLIDE MOTION ------------- //
// function nextItem() {
//   var $previousSlide = $(".background").eq(currentSlideNumber - 1);
//   $previousSlide.removeClass("up-scroll").addClass("down-scroll");
// }

// function previousItem() {
//   var $currentSlide = $(".background").eq(currentSlideNumber);
//   $currentSlide.removeClass("down-scroll").addClass("up-scroll");
// }
















//attempt #1 image animation scroll
// const items = document.querySelectorAll('.collage-item');

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     }
//   });
// }, { threshold: 0.2 });

// items.forEach(item => observer.observe(item));

//attempt #2 image animation scroll
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('visible');
  //       observer.unobserve(entry.target); // Only animate once
  //     }
  //   });
  // }, {
  //   threshold: 0.1
  // });

  // document.querySelectorAll('.collage-item').forEach(item => {
  //   observer.observe(item);
  // });






  // document.addEventListener("DOMContentLoaded", () => {
  //   const images = document.querySelectorAll(".scroll-fade");

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("visible");
  //       }
  //     });
  //   }, {
  //     threshold: 0.1 // Trigger when 10% of the image is visible
  //   });

  //   images.forEach(image => observer.observe(image));
  // });










  // document.addEventListener("DOMContentLoaded", () => {
  //   const elements = document.querySelectorAll('.scroll-fade');

  //   const observer = new IntersectionObserver((entries, obs) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('visible');
  //         obs.unobserve(entry.target); // Optional: stops observing after first reveal
  //       }
  //     });
  //   }, {
  //     threshold: 0.1
  //   });

  //   elements.forEach(el => observer.observe(el));
  // });
















  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('visible');
  //     }
  //   });
  // }, { threshold: 0.1 });

  // document.querySelectorAll('.scroll-img').forEach(img => {
  //   observer.observe(img);
  // });









  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('visible');
  //     } else {
  //       entry.target.classList.remove('visible'); // Slide out again
  //     }
  //   });
  // }, { threshold: 0.1 });

  // document.querySelectorAll('.scroll-slide').forEach(el => {
  //   observer.observe(el);
  // });

  // window.addEventListener('DOMContentLoaded', () => { 
  //   /* code */ 
  //   console.log('Observing', entry.target, 'Visible?', entry.isIntersecting);

  // });






















  // const observer = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('visible');
  //       observer.unobserve(entry.target); // Optional: Only animate once
  //     }
  //   });
  // }, { threshold: 0.1 });

  // document.querySelectorAll('.scroll-image').forEach(el => {
  //   observer.observe(el);
  // });















  // document.addEventListener("DOMContentLoaded", function () {
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('visible');
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   }, { threshold: 0.1 });

  //   document.querySelectorAll('.scroll-image').forEach(el => observer.observe(el));
  // });





//   document.addEventListener('DOMContentLoaded', function() {
//     const image = document.querySelector('.image');
//     setTimeout(() => {
//         image.classList.add('slide-in');
//     }, 500); // Start animation after 500ms
// });









// const images = document.querySelectorAll('.scroll-image');


// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//     }
//   });
// }, { threshold: 0 });

// images.forEach((el) => observer.observe(el));







// document.addEventListener("DOMContentLoaded", () => {
//   const images = document.querySelectorAll('.scroll-image');

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//         observer.unobserve(entry.target); // optional: remove observer after animation
//       }
//     });
//   }, { threshold: 0 });

//   images.forEach((el) => observer.observe(el));
// });

















// document.addEventListener("DOMContentLoaded", () => {
//   const images = document.querySelectorAll('.scroll-image');

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Use requestAnimationFrame to ensure smooth transition
//         requestAnimationFrame(() => {
//           entry.target.classList.add('visible');
//         });

//         observer.unobserve(entry.target); // Optional: stop observing once animated
//       }
//     });
//   }, { threshold: 0.1 });

//   images.forEach((el) => observer.observe(el));
// });






// Get the modal
// var modalc = document.getElementById("contact-modal");

// // Get the button that opens the modal
// var btn = document.getElementById("contact");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modalc.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modalc.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modalc.style.display = "none";
//   }
// }





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
