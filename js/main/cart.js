//showing the cart list

const cartBtn = document.querySelector(".cartBtn");
const cartList = document.querySelector(".cart-list");

cartBtn.onclick = () => {
  cartList.style.transform = `translateX(0)`;
};

//close cart list

const closeBtn = document.querySelector("#closeBtn");
closeBtn.onclick = () => {
  cartList.style.transform = `translateX(500px)`;
};

//remove item from the cart
const removeBtn = document.querySelectorAll("#removeBtn");
const itemsList = document.querySelector(".items-list");
const empty = `<span class="empty">cart is Empty</span>`;
const checkOutBtn = document.querySelector("#checkout");

removeBtn.forEach((e) => {
  e.onclick = () => {
    e.closest(".item").remove();
    cartListCheck();
  };
});

//removeAll from the cart

const removeAllBtn = document.querySelector("#removeAllBtn");
removeAllBtn.onclick = () => {
  itemsList.innerHTML = ``;
  cartListCheck();
};

//default if no items in cart list

function cartListCheck() {
  const cartItems = document.querySelectorAll(".items-list .item");
  cartBtn.setAttribute("data-txt", cartItems.length);
  console.log(cartItems.length);
  if (!itemsList.querySelector(".item")) {
    itemsList.innerHTML = empty;
    removeAllBtn.style.display = `none`;
    checkOutBtn.style.display = `none`;
  } else {
    if (itemsList.querySelector(".empty")) {
      empty.remove();
      removeAllBtn.style.display = `block`;
      checkOutBtn.style.display = `block`;
    }
  }
}
cartListCheck();

//cart red not on
