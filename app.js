"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize the app - sæt event listeners og hent data
function initApp() {
  console.log("App initialized");
}

const productTitle = "Fjallraven - Foldsack No. 1 Backpack";
const productPrice = 849;
const inStock = true;

const productTitle2 = "Mens Casual Premium Slim Fit T-Shirts";
const productPrice2 = 160;
const inStock2 = false;

const html = `
 <article class="product-card">
  <img src="${product1.image}" class="product-image">
  <div class ="product-info">
    <h2 class="product-name">${product1.title}</h2>
    <p class="product-description">${product1.description}</p>
    <p class="product-price">${product1.price} kr</p>
  </div>
 </article>
;
document.querySelector("#test").insertAdjacentHTML("beforeend", html);`


const product1 = {
  title: "Grim Taske",
  price: 69,
  inStock: true,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "bags"
};

const product2 ={
  title: "Temu Trøje",
  price: 2,
  inStock: true,
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879_.jpg",
  description: "100% Polyester",
  category: "clothing"
};

console.log(product1);
console.log(product2);


//if (inStock == true ) 
{
const testSection = document.querySelector("#test");

  let color;
  if (inStock == true) {
    color = "green";
  } else {
    color = "red";
  }

  const html = `
    <div>
      <h3>Test: Produkt information</h3>
      <p style="color: ${color};"><strong>Titel:</strong> ${productTitle}</p>
      <p style="color: ${color};"><strong>Pris:</strong> ${productPrice} kr</p>
      <p style="color: ${color};"><strong>På lager:</strong> ${inStock}</p>
    </div>
  `;
  testSection.insertAdjacentHTML("beforeend", html);
}

//if (inStock2 == true) 
{
  const testSection = document.querySelector("#test");

  let color;
  if (inStock2 == true) {
    color = "green";
  } else {
    color = "red";
  }

  const html = `
    <div>
     <h3>Test: Produkt information</h3>
      <p style="color: ${color};"><strong>Titel:</strong> ${productTitle2}</p>
      <p style="color: ${color};"><strong>Pris:</strong> ${productPrice2} kr</p>
      <p style="color: ${color};"><strong>På lager:</strong> ${inStock2}</p>
    </div>
  `;
  testSection.insertAdjacentHTML("beforeend", html);
}
if (inStock) {
  console.log(`${productTitle} er på lager!`);
} else {
  console.log(`${productTitle} er desværre ikke på lager!`);
}

if (productPrice > productPrice2) {
  console.log(`${productTitle} er dyrest, og koster ${productPrice} kr.`);
} else {
  console.log(`${productTitle2} er dyrest, og koster ${productPrice2} kr.`);
}

if (inStock2) {
  console.log(`${productTitle2} er på lager!`);
} else {
  console.log(`${productTitle2} er desværre ikke på lager!`);
}
if (productPrice < productPrice2) {
  console.log(`${productTitle} er billigst, og koster ${productPrice} kr.`);
} else {
  console.log(`${productTitle2} er billigst, og koster ${productPrice2} kr.`);
}
