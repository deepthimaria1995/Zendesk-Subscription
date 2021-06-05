import {
  unsetCurrentPlan,
  setSelectedPlan,
  unsetSelectedPlan,
  indicateCurrentPlan,
} from './planIndicators.js';
import {
  getPlanOfProduct,
  calculateTotalPrice,
  calculatePerSeatPrice,
} from './operations.js';
import {
  disableButton,
  selectElement,
  deselectElement,
  hideElement,
  showElement,
} from '../utility/utilityHelper.js';
import { PRODUCTS, CURRENCY } from '../model/planDetails.js';

// event handler for product button
// event : click
function productBtnClickEventHandler(product) {
  console.debug('click event triggered for ' + product);
  // indicate selected product btn
  for (let index in PRODUCTS) {
    PRODUCTS[index] === product
      ? selectElement('product-' + PRODUCTS[index])
      : deselectElement('product-' + PRODUCTS[index]);
  }

  // update selected product plans
  chosenProductPlan = getPlanOfProduct(product);

  // update plan names, cost per seat, total price as per selected product
  var convRule;
  for (let index in chosenProductPlan) {
    document.getElementById(index + '-plan-name').innerHTML =
      chosenProductPlan[index].planName;

    if (chosenCurrency != 'USD') {
      for (let index in CURRENCY) {
        if (chosenCurrency === index) {
          convRule = CURRENCY[index].conv;
        }
      }
      document.getElementById(index + '-cost-per-seat').innerHTML = (
        chosenProductPlan[index].cost * convRule
      ).toFixed(2);
    } else {
      document.getElementById(index + '-cost-per-seat').innerHTML = parseFloat(
        chosenProductPlan[index].cost.toFixed(2)
      );
    }
  }
  calculateTotalPrice(product);

  // indicate current plan of selected product
  indicateCurrentPlan(currentPlanNode[product].planName);
}

// event handler for plan
// event : click
function planClickEventHandler(planIndex) {
  console.debug('click event triggered for ' + chosenProductPlan[planIndex]);
  for (let index in chosenProductPlan) {
    let indicator = document.getElementById(index + '-plan-name-indicator');
    if (index === planIndex) {
      if (indicator.innerHTML === 'CURRENT PLAN') {
        unsetCurrentPlan(index);
        setSelectedPlan(index);
        indicator.innerHTML = 'SELECTED PLAN';
      } else if (indicator.innerHTML === '') {
        setSelectedPlan(index);
        indicator.innerHTML = 'SELECTED PLAN';
      }
      selectedPlanNode = {
        planName: document.getElementById(planIndex + '-plan-name').textContent,
        cost: document.getElementById(planIndex + '-cost-per-seat').textContent,
        seats: document.getElementById(planIndex + '-quantity').value,
        total: document.getElementById(planIndex + '-total-price').textContent,
        currency: chosenCurrency,
        product: chosenProduct,
      };
      disableButton(document.getElementById('update-btn'), false);
    } else {
      if (indicator.innerHTML === 'SELECTED PLAN') {
        indicator.innerHTML = '';
        unsetSelectedPlan(index);
      }
    }
  }
}

// Implementation of Back button
function backBtnClickHandler() {
  console.debug('click event triggered for back button');
  hideElement(document.getElementById('summary-page'));
  showElement(document.getElementById('subscription-page'));
  indicateCurrentPlan(currentPlanNode[chosenProduct].planName);
  disableButton(document.getElementById('update-btn'), true);
}

// event handler for currency list
// event : change
function currencyListChangeHandler(currency) {
  console.debug('change event triggered for currency list to ' + currency);
  chosenCurrency = currency;
  for (let index in chosenProductPlan) {
    document.getElementById(index + '-currency').innerHTML = chosenCurrency;
  }
  calculatePerSeatPrice();
  indicateCurrentPlan(currentPlanNode[chosenProduct].planName);
}

// function to show the Done page with the current and update plans
function updateDone(response) {
  console.debug('updating values in summary page');
  let divLoadPage = document.getElementById('load-page');
  let divSubscriptionPage = document.getElementById('subscription-page');
  let divSummaryPage = document.getElementById('summary-page');
  let newplan = document.getElementById('new-plan');
  let newseats = document.getElementById('new-seats');
  let newcost = document.getElementById('new-cost');
  let oldplan = document.getElementById('old-plan');
  let oldseats = document.getElementById('old-seats');
  let oldcost = document.getElementById('old-cost');

  console.debug('### updateDone');
  newplan.classList.add('updated');
  newcost.classList.add('updated');
  newseats.classList.add('updated');

  oldplan.textContent = currentPlanNode[chosenProduct].planName;
  oldseats.textContent = currentPlanNode[chosenProduct].seats;
  oldcost.textContent =
    currentPlanNode[chosenProduct].currency +
    ' ' +
    parseFloat(parseFloat(currentPlanNode[chosenProduct].total).toFixed(2));

  newplan.textContent = response.planName;
  newseats.textContent = response.seats;
  newcost.textContent =
    response.currency + ' ' + parseFloat(response.total.toFixed(2));

  if (response.planName !== currentPlanNode[chosenProduct].name) {
    newplan.classList.add('updated');
  }
  if (response.seats !== currentPlanNode[chosenProduct].seats) {
    newseats.classList.add('updated');
  }
  if (response.cost !== currentPlanNode[chosenProduct].cost) {
    newcost.classList.add('updated');
  }

  hideElement(divLoadPage);
  hideElement(divSubscriptionPage);
  showElement(divSummaryPage);

  currentPlanNode[chosenProduct] = response;
}

// implementation of Update Subscription button
function updateBtnClickHandler(
  planName,
  seats,
  cost,
  total,
  chosenProduct,
  chosenCurrency
) {
  console.debug('click event triggered for update button');
  let divLoadPage = document.getElementById('load-page');
  let divSubscriptionPage = document.getElementById('subscription-page');
  console.debug('$$$ Showing details of the subscription update');
  hideElement(divLoadPage);
  showElement(divSubscriptionPage);

  $.ajax({
    type: 'put',
    url: '/api/current',
    data: {
      planName: planName,
      seats: seats,
      cost: cost,
      total: total,
      product: chosenProduct,
      currency: chosenCurrency,
    },
  }).then((response) => updateDone(response));
}

export {
  productBtnClickEventHandler,
  planClickEventHandler,
  backBtnClickHandler,
  currencyListChangeHandler,
  updateBtnClickHandler,
};
