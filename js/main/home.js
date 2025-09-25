// menu in responsive

const menuBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav");
console.log(menuBtn);

menuBtn.addEventListener("click", () => {
  console.log(1);
  document.querySelector("header").classList.toggle("show");
});

// hovering between cards
const cards = document.querySelectorAll(".cards .card");

cards.forEach((e) => {
  e.addEventListener("click", () => {
    cards.forEach((e) => {
      e.style.flexGrow = 1;
    });
    e.style.flexGrow = 15;
  });
});

const listBtns = document.querySelectorAll(".faq ul li .top button");
listBtns.forEach((e) => {
  e.onclick = () => {
    console.log(true);
    e.closest("li").classList.toggle("show");
  };
});
