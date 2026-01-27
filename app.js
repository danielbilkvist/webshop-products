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

console.log(productTitle);
console.log(typeof productTitle);
console.log(productPrice);
console.log(typeof productPrice);
console.log(inStock);
console.log(typeof inStock);


const testSection = document.querySelector)