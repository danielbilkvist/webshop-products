"use strict";
import { products } from "./data.js";
import { getExcerpt, getStockStatus } from "./helpers.js";
// Event listener - starter appen når siden er loaded
document.addEventListener("DOMContentLoaded", initApp);

// Initialize app
function initApp() {
  console.log("App initialized");
  displayAllProducts();
}

// Vis alle produkter
function displayAllProducts() {
 const grid = document.querySelector("#productGrid");
 grid.innerHTML = products.map(displayProduct).join("");
};

// Vis ét produkt
function displayProduct(product) {
  const stock = getStockStatus(product.inStock);

  // lav HTML
  return /*html*/ `
  <article class="product-card">
    <img src="${product.image}" class="product-image" />
    <div class="product-info">
      <h2 class="product-title">${product.title}</h2>
      <p class="product-description">
        ${product.description}
      </p>
      <p class="product-price">$${product.price}</p>
      <span class="product-stock ${stock.class}">${stock.text}</span>
    </div>
  </article>
  `;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const titles = products.map((product) => product.title);
console.log(titles);

const prices = products.map((product) => product.price);
console.log(prices);

const simplified = products.map (product => {
  return {
    title: product.title,
    price: product.price,
    stock: product.inStock,
  };
});
console.log(simplified);
