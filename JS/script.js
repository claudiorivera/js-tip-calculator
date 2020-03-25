const SUBTOTAL = document.querySelector("input[name='subTotal']");
const TIP = document.querySelector("select[name='tipAmount']");
const SUBMIT = document.querySelector("button");

// Variables - Converted to Ints and Floats
let tipRate = parseInt(TIP.value);
let subTotal = parseFloat(SUBTOTAL.value);

// Function that returns the result of multiplying
// a sub total and a tax rate
function calculateTipAmount(subTotal, tipRate) {
  return Math.round((subTotal * tipRate) / 10) / 100;
}

let tipAmount = calculateTipAmount(subTotal, tipRate);

// Function that stores the result of adding
// the sub total and the tax amount, in dollars and cents
// to 2 decimal places
function calculateTotalAmount(subTotal, tipAmount) {
  return subTotal + tipAmount;
}

// Function that displays the total
function displayTotal(e) {
  e.preventDefault();
  // TOTAL.outerText += " $" + calculateTotalAmount(subTotal, tipAmount);
  console.log(calculateTotalAmount(subTotal, tipAmount));
}

// Event handlers
SUBMIT.onclick = displayTotal;

// TODO: Calculate button only works with starting values from HTML.
// It should work with inputted values
