window.onload = function () {
  const overlay = document.querySelector(".overlay");
  const content = document.querySelector(".content");

  setTimeout(() => {
    overlay.style.display = "none"; // Hide the overlay
    content.style.visibility = "visible"; // Show the content
  }, 5000); // Adjust timing as needed (3s for spin + 2s for move)
};
