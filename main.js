document.addEventListener("DOMContentLoaded", function () {
  // Function to handle opacity transition for a given element
  function fadeIn(element) {
    let opacity = 0;
    const fadeInInterval = setInterval(function () {
      opacity += 0.5;
      element.style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(fadeInInterval);
      }
    }, 100);
  }

  // Initial opacity for the first text
  setTimeout(function () {
    document.querySelector(".main-text-1").style.opacity = "1";
    fadeIn(document.querySelector(".main-text-1"));
  }, 1500);

  // Initial opacity for the second text with a delay
  setTimeout(function () {
    document.querySelector(".main-text-2").style.opacity = "1";
    fadeIn(document.querySelector(".main-text-2"));
  }, 3500);

  setTimeout(function () {
    document.querySelector(".wrappar").style.opacity = '1'
    fadeIn(document.querySelector(".wrappar"));
  }, 5000)
});

function playVideo() {
  var video = document.querySelector(".project-video");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// smooth sliding

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
