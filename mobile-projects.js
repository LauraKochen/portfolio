// Open the Modal
function openModal() {
  document.getElementById("infoModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("infoModal").style.display = "none";
}

// Optional: Close modal when clicking outside of it
window.onclick = function (event) {
  var modal = document.getElementById("infoModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
