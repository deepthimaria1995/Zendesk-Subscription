import { PLAN_OUTLINE, CURRENCY } from "../model/planDetails.js";

// function to get the plans of the given product(:param)
function getPlanOfProduct(product) {
  console.debug('fetching plan of selected product');
    let plan = [];
    for (let index in PLAN_OUTLINE) {
      if (PLAN_OUTLINE[index].product === product) {
        plan = PLAN_OUTLINE[index].plans;
      }
    }
    return plan;
  }
  
  // function to calculate and update the total price of all plans of selected product
  function calculateTotalPrice() {
    console.debug('calculating total price');
    for (let index in chosenProductPlan) {
      document.getElementById(index + '-total-price').innerHTML = parseFloat(
        (
          document.getElementById(index + '-cost-per-seat').innerHTML *
          document.getElementById(index + '-quantity').value
        ).toFixed(2)
      );
    }
  }
  
  // function to calculate and update cost per seat of plans in selected currency
  function calculatePerSeatPrice() {
    console.debug('calculating cost per seat');
    let convRule;
    // get the currency conversion rule
    for (let index in CURRENCY) {
      if (chosenCurrency === index) {
        convRule = CURRENCY[index].conv;
      }
    }
    // update the cost per seat
    for (let index in chosenProductPlan) {
      document.getElementById(index + '-cost-per-seat').innerHTML = parseFloat(
        (chosenProductPlan[index].cost * convRule).toFixed(2)
      );
      calculateTotalPrice();
    }
  }

  export { getPlanOfProduct, calculateTotalPrice, calculatePerSeatPrice}