const SUBTOTAL = document.querySelector("input[name='subTotal']");
const TIP = document.querySelector("select[name='tipAmount']");
const CALCULATE = document.querySelector("button[name='calculateTotalAmount']");
const DISPLAY = document.querySelector(".totalAmountDisplayArea");
const TOTAL = document.querySelector(".totalAmountResult");

// Function that returns the tip amount,
// given a subTotal and tipRate, to the
// nearest cent
var calculateTipAmount = (subTotal, tipRate) => {
  return Math.round(subTotal * tipRate) / 100;
};

// Function that returns the total amount,
// given a subTotal and tipAmount
var calculateTotalAmount = (subTotal, tipAmount) => {
  return subTotal + tipAmount;
};

// Event handler function that displays the total
// in the textContent div
function displayTotal() {
  // Get the current form values...
  let subTotal = parseFloat(SUBTOTAL.value);
  let tipRate = parseInt(TIP.value);

  // ...calculate the totalAmount...
  TOTAL.textContent = `$${calculateTotalAmount(
    subTotal,
    calculateTipAmount(subTotal, tipRate)
  ).toFixed(2)}`;

  // ...and unhide the results display...
  DISPLAY.style.display = "block";
}

// When the Calculate button is clicked, call the displayTotal function
CALCULATE.onclick = displayTotal;
