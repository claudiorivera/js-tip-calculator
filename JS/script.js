const SUBTOTAL = document.querySelector("#subTotal");
const TIP = document.querySelector("#tipAmount");
const SUBMIT = document.querySelector("#calculate");
const TOTAL = document.querySelector(".totalAmount");

// Variables
let tipRate = TIP.value;
let subTotal = parseFloat(SUBTOTAL.value);

// Function that returns the result of multiplying
// a sub total and a tax rate, in cents with 2 decimal places
function calculateTipAmount(subTotal, tipRate) {
  return Math.round((subTotal * 100 * tipRate) / 1000) / 100;
}

let tipAmount = calculateTipAmount(subTotal, tipRate);

// Function that stores the result of adding
// the sub total and the tax amount, in dollars and cents
function calculateTotalAmount(subTotal, tipAmount) {
  return (subTotal + tipAmount).toFixed(2);
}

// Function that displays the total
function displayTotal(e) {
  e.preventDefault();
  TOTAL.outerText += " $" + calculateTotalAmount(subTotal, tipAmount);
}

// Event listeners and handlers go here
SUBMIT.onclick = displayTotal;
