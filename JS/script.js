const SUBTOTAL = document.querySelector("input[name='subTotal']");
const TIP = document.querySelector("select[name='tipAmount']");
const CALCULATE = document.querySelector("button[name='calculateTotalAmount']");

// Variables - Converted to Ints and Floats
let tipRate = parseInt(TIP.value);
let subTotal = parseFloat(SUBTOTAL.value);

// Function that returns the result of multiplying
// a sub total and a tax rate
function calculateTipAmount() {
  return Math.round((subTotal * tipRate) / 10) / 100;
}

// Function that stores the result of adding
// the sub total and the tax amount, in dollars and cents
// to 2 decimal places
function calculateTotalAmount() {
  let tipAmount = calculateTipAmount();
  return subTotal + tipAmount;
}

// Displays the total - Console log for now
function displayTotal() {
  console.log(calculateTotalAmount());
}

// Event handlers

// When the Calculate button is clicked, display the total
CALCULATE.onclick = displayTotal;

// When the Tip Amount is changed, update tipRate
TIP.addEventListener("change", event => {
  tipRate = parseInt(TIP.value);
  console.log(`The tip rate is now ${tipRate}%.`);
});

// When the Sub Total is changed, update subTotal
SUBTOTAL.addEventListener("change", event => {
  subTotal = parseFloat(SUBTOTAL.value);
  console.log(`The sub total is now $${subTotal}.`);
});
