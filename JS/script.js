const SUBTOTAL = document.querySelector("input[name='subTotal']");
const TIP = document.querySelector("select[name='tipAmount']");
const CALCULATE = document.querySelector("button[name='calculateTotalAmount']");
const DISPLAY = document.querySelector(".displayArea");
const TOTAL = document.querySelector(".totalAmountResult");

// Variables - Converted to Ints and Floats
let tipRate = parseInt(TIP.value);
let subTotal = parseFloat(SUBTOTAL.value);

// Function that returns the result of multiplying
// a sub total and a tax rate
function calculateTipAmount() {
  return Math.round(subTotal * tipRate) / 100;
}

// Function that stores the result of adding
// the sub total and the tax amount, in dollars and cents
// to 2 decimal places
function calculateTotalAmount() {
  let tipAmount = calculateTipAmount();
  return subTotal + tipAmount;
}

// Displays the total
function displayTotal() {
  // Unhide the results display...
  DISPLAY.style.display = "block";
  // ...and update the amount
  TOTAL.textContent = `$${calculateTotalAmount().toFixed(2)}`;
}

// Event handlers

// When the Calculate button is clicked, call the displayTotal function
CALCULATE.onclick = displayTotal;

// When the Tip Amount is changed, update tipRate
TIP.addEventListener("change", event => {
  tipRate = parseInt(TIP.value);
});

// When the Sub Total is changed, update subTotal
SUBTOTAL.addEventListener("input", event => {
  subTotal = parseFloat(SUBTOTAL.value);
});
