// PROJECTS MODAL CODE

// function openModal() {
//   document.getElementById("projectModal").style.display = "block";
// }

// function closeModal() {
//   document.getElementById("projectModal").style.display = "none";
// }

// // Optional: Close the modal when clicking outside of it
// window.onclick = function (event) {
//   var modal = document.getElementById("projectModal");
//   if (event.target === modal) {
//     closeModal();
//   }
// };

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  console.log(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
