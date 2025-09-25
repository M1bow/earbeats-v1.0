import { total } from "./main.js";

window.onload = async () => {
  const res = await fetch("http://localhost:5500/products");
  const products = await res.json();
  console.log(products);

  products.forEach((element) => {
    //img side
    const slider = document.querySelector(".slider .list");
    const cardHeroImg = document.createElement("div");
    cardHeroImg.classList.add("item");
    const itemName = document.createElement("div");
    itemName.classList.add("title");
    itemName.textContent = element.company;
    const heroImg = document.createElement("img");
    heroImg.setAttribute("src", element.img);

    cardHeroImg.append(itemName, heroImg);
    slider.appendChild(cardHeroImg);

    //info side
    const cardInfoContainer = document.querySelector(".slider-info");
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("slider-info-card");
    cardInfo.innerHTML = `<h3>General</h3>`;

    const overview = document.createElement("div");
    overview.classList.add("overview");

    const content = document.createElement("div");
    content.classList.add("content");

    const contentImg = document.createElement("div");
    contentImg.classList.add("item-img");
    contentImg.style.backgroundImage = `url(${element.img})`;

    const itemDetail = document.createElement("div");
    itemDetail.classList.add("item-detail");
    itemDetail.innerHTML = `<h4 class="price">$${element.price}</h4>
      <h5 class="item-name">${element.product_name}</h5>
      <div class="rate">
        <div class="stars"><i class="bx bxs-star"></i>5.0</div>
        <span>(24 reviews)</span>`;

    const favBtn = document.createElement("div");
    favBtn.classList.add("fav");
    favBtn.innerHTML = `<button id="favBtn">
      <i class="bx bxs-heart"></i>
    </button>`;

    content.append(contentImg, itemDetail);
    overview.append(content, favBtn);

    //colors
    const colors = document.createElement("div");
    colors.classList.add("colors");
    const eColors = element.color.split("|");
    eColors.forEach((colorValue) => {
      const color = document.createElement("div");
      color.classList.add("clr");
      color.style.backgroundColor = colorValue;
      colors.appendChild(color);
    });

    //imgs
    const imgs = document.createElement("div");
    imgs.classList.add("imgs");
    const eImgs = element.imgs.split("|");
    eImgs.forEach((imgUrl) => {
      const img = document.createElement("div");
      img.classList.add("img");
      const insertedImg = document.createElement("img");
      insertedImg.setAttribute("src", imgUrl);
      img.appendChild(insertedImg);
      // img.style.backgroundImage = `url(${imgUrl})`;
      imgs.appendChild(img);
    });

    //desc
    const description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = `<span>Description</span>
      <p>${element.description}</p>`;

    //keys
    const keys = document.createElement("div");
    keys.classList.add("keys");
    keys.innerHTML = `<h4>Technical Specification</h4>
      <div class="tech">
        <div class="battery">
          <span class="material-symbols-outlined"> battery_5_bar </span>
          ${element.battary_life}h
        </div>
        <div class="charging">
          <span class="material-symbols-outlined"> battery_charging_80 </span>
          ${element.battary_charge}h
        </div>
        <div class="freq-response">
          <span class="material-symbols-outlined"> discover_tune </span>
          ${element.frequency_range}
        </div>
        <div class="impedance">
          <span class="material-symbols-outlined"> special_character </span>
          ${element.active_impedance}ohms (active), ${element.passive_impedance}ohms (passive)
        </div>
      </div>`;

    cardInfo.append(overview, colors, imgs, description, keys);
    cardInfoContainer.appendChild(cardInfo);
  });

  const items = document.querySelectorAll(".slider-info .slider-info-card");
  items[2].classList.add("active");
  total.innerHTML = items.length < 10 ? `0${items.length}` : items.length;

  const itemImgs = document.querySelectorAll(".slider-info-card .imgs .img");
  console.log(itemImgs);

  itemImgs.forEach((e) => {
    e.onclick = () => {
      console.log(e);
      const items = document.querySelectorAll(".list .item");
      const img = items[2].querySelector("img");

      const imgValue = e.querySelector("img");

      const url = imgValue.getAttribute("src");
      console.log(imgValue, url);
      console.log(img);
      img.setAttribute("src", url);
    };
  });
};
