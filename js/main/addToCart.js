const addToCart = document.getElementById("addToCart");
// const items = document.querySelectorAll("");
console.log(addToCart);
addToCart.onclick = () => addToCartFun();

function addToCartFun() {
  const items = document.querySelectorAll(".list .item");
  console.log(items[2]);
  const reqItem = items[2];
  const getcartlist = document.querySelector(".cart-list .items-list  ");
  console.log(getcartlist);

  const newCartItem = document.createElement("div");
  newCartItem.classList.add("item");
  const newCartItemInfo = document.createElement("div");
  newCartItemInfo.classList.add("info");
  const newCartItemImg = document.createElement("div");
  newCartItemImg.classList.add("img");

  newCartItemImg.innerHTML = `<button id="removeBtn">
              <span class="material-symbols-outlined"> close </span>
            </button>`;

  newCartItemInfo.innerHTML = `<div class="name">
              <h4>item name</h4>
              <span>company</span>
            </div>

            <div class="quantity">
              <div class="minus">-</div>
              <div class="num">1</div>
              <div class="plus">+</div>
            </div>

            <div class="total">
              <h4>total</h4>
              <span>$199</span>
            </div>`;

  const img = reqItem.querySelector("img");
  console.log(img);
  const url = img.getAttribute("src");
  console.log(url);
  newCartItemImg.style.backgroundImage = `url(${url})`;
  newCartItem.appendChild(newCartItemImg);
  newCartItem.appendChild(newCartItemInfo);
  console.log(newCartItem);
  getcartlist.appendChild(newCartItem);
}
