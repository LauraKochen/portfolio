window.onload = function () {
  const spaceman = document.querySelector(".spaceman");

  // Remove the spaceman after the animation completes (5 seconds)
  setTimeout(() => {
    spaceman.style.display = "none"; // Hide spaceman after walking
  }, 5000); // Match this duration with your animation time
};
