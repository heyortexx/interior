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

// Form placeholder action
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted! (Backend not connected yet)");
});
