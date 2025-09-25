// // import { products, wishlist } from "./data.js";
// import { counter } from "./main.js";

// console.log(9);
// const itemInfo = document.querySelector(".slider-info");

// // itemInfo.innerHTML = ``;

// export function changeContent(indx) {
//   const favBtn = document.querySelector("#favBtn");

//   favBtn.addEventListener("click", () => {
//     const name = getProductName();
//     const id = getProductId(name);
//     if (id !== null) {
//       addToFav(id);
//     }
//   });
// }
// const favBtn = document.querySelector("#favBtn");

// favBtn.addEventListener("click", () => {
//   const name = getProductName();
//   const id = getProductId(name);
//   if (id !== null) {
//     addToFav(id);
//   }
// });

// function getProductName() {
//   const itemName = document.querySelector(".item-name").textContent;
//   return itemName;
// }

// function getProductId(name) {
//   const product = products.find((e) => e.product_name === name);
//   return product ? product.id : null;
// }

// function addToFav(id) {
//   const indx = wishlist.findIndex((e) => e == id);
//   if (indx == -1) {
//     wishlist.push(id);
//   } else {
//     wishlist.splice(indx, 1);
//   }
//   console.log(wishlist);
// }
