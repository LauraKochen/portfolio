// PROJECTS MODAL CODE

function openModal() {
  document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Optional: Close the modal when clicking outside of it
window.onclick = function (event) {
  var modal = document.getElementById("projectModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Optional: Close the modal when clicking outside of it
window.onclick = function (event) {
  var modal = document.getElementById("projectModal");
  if (event.target === modal) {
    closeModal();
  }
};
