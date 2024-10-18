<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>;

const letters = document.querySelectorAll(".letter");

// GSAP timeline for revealing the letters
const tl = gsap.timeline({
  onStart: () => {
    gsap.set("#containers", { opacity: 1 }); // Ensure container is visible
  },
});

tl.to(letters, {
  opacity: 1,
  color: "white",
  duration: 1.2,
  ease: "power2.inOut",
  stagger: {
    amount: 2,
    from: "center",
  },
});

// Nebula can gradually fade out if needed
tl.to(".nebula", {
  opacity: 0, // Nebula slowly fades out
  duration: 4,
  ease: "power3.out",
});
