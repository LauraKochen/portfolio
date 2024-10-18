// type into text, not working, this is the one I wish was

const textArray = ["Designer", "Developer", "Creative Thinker"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    document.getElementById("typed-text").innerHTML +=
      textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(deleteText, 2000);
  }
}

function deleteText() {
  if (charIndex > 0) {
    document.getElementById("typed-text").innerHTML = textArray[
      textIndex
    ].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 100);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

type();

/* type text intro  */

// const textLines = [
//   "Hello, world!",
//   "Welcome to my website.",
//   "Enjoy your stay!",
// ];

// let lineIndex = 0;
// let charIndex = 0;

// function typeLine() {
//   if (lineIndex < textLines.length) {
//     const currentLine = textLines[lineIndex];
//     const outputDiv = document.getElementById("output");

//     if (charIndex < currentLine.length) {
//       outputDiv.textContent += currentLine.charAt(charIndex);
//       charIndex++;
//       setTimeout(typeLine, 100); // Adjust typing speed here
//     } else {
//       outputDiv.textContent += "\n"; // Move to the next line
//       lineIndex++;
//       charIndex = 0;
//       setTimeout(typeLine, 500); // Pause before the next line
//     }
//   }
// }

// typeLine();

// PROJECTS SLIDER

document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");

  projects.forEach((project, index) => {
    setTimeout(() => {
      project.classList.add("animate");
    }, index * 500); // Adjust the timing as needed
  });
});

// CURSOR JAVASCRIPT, NOT WORKING

// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
//   cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
// });

// function toggleNavbar() {
//   const navbar = document.querySelector(".navbar-desktop");
//   navbar.classList.toggle("collapsed");
// }

// // PROJECTS MODAL CODE

// function openModal() {
//   document.getElementById("projectModal").style.display = "block";
// }

// function closeModal() {
//   document.getElementById("projectModal").style.display = "none";
// }
