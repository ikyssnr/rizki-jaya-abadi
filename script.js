// Toggle class active

const navbar1 = document.querySelector(".navbar1");
//ketika di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbar1.classList.toggle("active");
};

// luar side bar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar1.contains(e.target)) {
    navbar1.classList.remove("active");
  }
});
