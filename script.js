// Counter animation
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 200;
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 15);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// Mobile navbar toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Animate hero text on load
window.addEventListener("load", () => {
  document.querySelectorAll(".slide-in").forEach(el => {
    el.style.opacity = "1";
  });
});

// Form placeholder action
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted! (Backend not connected yet)");
});
