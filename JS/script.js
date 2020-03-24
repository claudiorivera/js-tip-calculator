const SUBTOTAL = document.querySelector("#subTotal");
const TIP = document.querySelector("#tipAmount");
const SUBMIT = document.querySelector("#calculate");
const TOTAL = document.querySelector(".totalAmount");

// Variables
let tipRate = TIP.value;
let subTotal = parseFloat(SUBTOTAL.value);

// Function that returns the result of multiplying
// a sub total and a tax rate
function calculateTipAmount(subTotal, tipRate) {
  return Math.round((subTotal * 100 * tipRate) / 1000) / 100;
}

let tipAmount = calculateTipAmount(subTotal, tipRate);

// Function that stores the result of adding
// the sub total and the tax amount, in dollars and cents
// to 2 decimal places
function calculateTotalAmount(subTotal, tipAmount) {
  return (subTotal + tipAmount).toFixed(2);
}

// Function that displays the total
function displayTotal(e) {
  e.preventDefault();
  TOTAL.outerText += " $" + calculateTotalAmount(subTotal, tipAmount);
}

// Event handler
SUBMIT.onclick = displayTotal;

// TODO: Calculate button only works with starting values.
// It should work with the currently displayed values.
