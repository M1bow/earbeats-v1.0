// import { products, wishlist } from "./data.js";
// import { changeContent } from "./products.js";

let items = document.querySelectorAll(".list .item");
const list = document.querySelector(".list");
const current = document.querySelector(".cur");
export let counter = 1;
export let total = document.querySelector(".total");
// total.innerHTML = items.length < 10 ? `0${items.length}` : items.length;

// first defining the cursor to left or right

// defining wether the mouse is on left,right side of the list
// still needs an editing to the value of the half
function direction() {
  const style = window.getComputedStyle(list);
  const half_width = parseFloat(style.width) / 2;
  return half_width;
}

// cursor change according to the x position of the cursor according to list
list.addEventListener("mousemove", (e) => {
  let half = direction();
  if (e.clientX > half + half * 0.5) {
    list.style.cursor = `var(--next-arr)`;
  } else if (e.clientX < half - half * 0.2) {
    list.style.cursor = `var(--prev-arr)`;
  } else {
    list.style.cursor = `var(--cursor)`;
  }
});

// sliding base for navigating between elements
list.addEventListener("click", (e) => {
  let half = direction();
  if (e.clientX > half + half * 0.5) {
    slider("next");
  } else if (e.clientX < half - half * 0.2) {
    slider("prev");
  }
});

// swipe function
let start = 0;
let end = 0;
list.addEventListener("touchstart", (e) => {
  start = e.changedTouches[0].clientX;
});
list.addEventListener("touchend", (e) => {
  end = e.changedTouches[0].clientX;
  swipe();
});

function swipe() {
  let diff = start - end;
  if (diff > 50) {
    slider("next");
  } else if (diff < -50) {
    slider("prev");
  }
}

// next and prev core function
function slider(type) {
  slideCards(type);
  let items = document.querySelectorAll(".list .item");
  if (type === "next") {
    list.appendChild(items[0]);
    counter = counter === items.length ? 1 : counter + 1;
  } else if (type === "prev") {
    list.prepend(items[items.length - 1]);
    counter = counter === 1 ? items.length : counter - 1;
  }
  current.innerHTML = counter < 10 ? `0${counter}` : counter;

  // console.log(`counter: ${counter}`);
  // const itemsl = document.querySelectorAll(".slider-info .slider-info-card");
  // console.log(`items : ${itemsl.length}`);

  // changeContent(counter - 1);
}

//changing content when moving between elements

//showing categories
const showCategories = document.querySelector(".slider header .head");
// console.log(categoryList.textContent);
showCategories.onclick = () => {
  console.log(1);
  showCategories.classList.toggle("showCategory");
};

// function slideCards(type) {
//   const items = document.querySelectorAll(".slider-info-card");
//   const infoCardList = document.querySelector(".slider-info");
//   items.forEach((e) => {
//     e.classList.remove("active");
//   });
//   if (type == "prev") {
//     infoCardList.appendChild(items[0]);
//   } else {
//     infoCardList.prepend(items[items.length - 1]);
//   }
//   items[3].classList.add("active");
// }

function slideCards(type) {
  const infoCardList = document.querySelector(".slider-info");
  let items = document.querySelectorAll(".slider-info-card"); // <<< حدث العناصر داخل الدالة كل مرة

  items.forEach((e) => e.classList.remove("active"));

  if (type == "next") {
    infoCardList.appendChild(items[0]);
  } else {
    infoCardList.prepend(items[items.length - 1]);
  }

  items = document.querySelectorAll(".slider-info-card");

  items[2].classList.add("active");
}

//when hover on an img to change the hero img
const itemImgs = document.querySelectorAll(".slider-info-card");

console.log(itemImgs);

itemImgs.forEach((e) => {
  e.onclick = () => {
    console.log(e);
    const items = document.querySelectorAll(".list .item");
    console.log(items[2].querySelector("img"));
  };
});
