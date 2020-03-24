const SUBTOTAL = document.querySelector("#subTotal");
const TIP = document.querySelector("#tipAmount");
const SUBMIT = document.querySelector("#calculate");

// Variables
const tipRate = TIP.value;
var subTotal = parseFloat(SUBTOTAL.value);

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

// Testing functions with console log
console.log(
  "The total on a check of $" +
    subTotal +
    " with a " +
    tipRate +
    "% tip is $" +
    calculateTotalAmount(subTotal, tipAmount) +
    "."
);
