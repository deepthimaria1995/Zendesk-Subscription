import { CURRENCY, PRODUCTS } from '../model/planDetails.js';
import { currencyListChangeHandler, planClickEventHandler, productBtnClickEventHandler, updateBtnClickHandler } from "../controllers/eventHandlers.js";
import { calculateTotalPrice} from "../controllers/operations.js";
import { indicateCurrentPlan } from "../controllers/planIndicators.js";

// function to create currency dropdown list
function createCurrencyDropDown() {
  console.debug('creating currency drop down');
  let div = document.createElement('div');
  div.className = 'currency-section';

  var lbl = document.createElement('label');
  lbl.innerHTML = 'Choose Currency : ';
  lbl.style.fontWeight = 700;

  var listCurrency = document.createElement('select');
  listCurrency.id = 'curr-list';
  listCurrency.className = 'curr-list';
  for (let index in CURRENCY) {
    var option = document.createElement('option');
    option.value = index;
    option.text = CURRENCY[index].name;
    if (CURRENCY[index] === 'USD') {
      option.selected = true;
    }
    listCurrency.appendChild(option);
  }
  listCurrency.onchange = function () {
    currencyListChangeHandler(listCurrency[listCurrency.selectedIndex].value);
  };

  div.appendChild(lbl);
  div.appendChild(listCurrency);
  return div;
}

// function to create product buttons
function createProductButton() {
  console.debug('creating product buttons');
  var parentDiv = document.getElementById('product-section');
  for (const index in PRODUCTS) {
    let btn = document.createElement('BUTTON');
    btn.id = 'product-' + PRODUCTS[index];
    btn.className = 'product';
    btn.innerHTML = PRODUCTS[index].toUpperCase();
    btn.addEventListener('click', () => {
      chosenProduct = btn.innerHTML;
      productBtnClickEventHandler(PRODUCTS[index]);
    });
    parentDiv.appendChild(btn);
  }
  return parentDiv;
}

// function to create subscription plans
function createPlan() {
  console.debug('creating plans');
  var parentDiv = document.getElementById('plan-section');
  for (let index in chosenProductPlan) {
    let div = document.createElement('div');
    div.className = 'plan-container';
    div.id = index + '-container';

    let hr = document.createElement('hr');
    hr.id = index + '-line';
    hr.className = 'line';

    div.appendChild(createPlanIndicatorSection(index));
    div.appendChild(createPlanNameSection(chosenProductPlan[index], index));
    div.appendChild(createPlanCostSection(chosenProductPlan[index], index));
    div.appendChild(createPlanSeatSection(index));
    div.appendChild(hr);
    div.appendChild(createPlanTotalCostSection(chosenProductPlan[index], index));
    div.addEventListener('click', function () {
      planClickEventHandler(index);
    });
    parentDiv.appendChild(div);
  }

  indicateCurrentPlan(currentPlanNode[chosenProduct].planName);
  return parentDiv;
}

function createPlanIndicatorSection(index) {
  let div = document.createElement('div');
  div.className = 'plan-indicator-section';
  div.id = index + '-plan-indicator-section';

  let lbl = document.createElement('label');
  lbl.setAttribute('for', 'indicator');
  lbl.className = 'indicator';
  lbl.id = index + '-plan-name-indicator';
  lbl.innerHTML = '';

  div.appendChild(lbl);
  return div;
}

function createPlanNameSection(plan, index) {
  let div = document.createElement('div');
  div.className = 'plan-name-section';
  div.id = index + '-plan-name-section';

  let lbl = document.createElement('Label');
  lbl.setAttribute('for', 'plan-name');
  lbl.className = 'plan-name';
  lbl.id = index + '-plan-name';
  lbl.innerHTML = plan.planName.toUpperCase();

  div.appendChild(lbl);
  return div;
}

function createPlanCostSection(plan, index) {
  let div = document.createElement('div');
  div.id = index + '-plan-cost-section';
  div.className = 'plan-cost-section';

  let lblCurr = document.createElement('Label');
  lblCurr.setAttribute('for', 'currency');
  lblCurr.id = index + '-currency';
  lblCurr.className = 'currency';
  lblCurr.innerHTML = chosenCurrency;

  let lblCostPerSeat = document.createElement('Label');
  lblCostPerSeat.setAttribute('for', 'cost');
  lblCostPerSeat.className = 'cost-per-seat';
  lblCostPerSeat.id = index + '-cost-per-seat';
  lblCostPerSeat.innerHTML = parseFloat(plan.cost.toFixed(2));

  let lblPerSeat = document.createElement('Label');
  lblPerSeat.setAttribute('for', 'cost-per-seat');
  lblPerSeat.innerHTML = ' /seat';

  div.appendChild(lblCurr);
  div.appendChild(lblCostPerSeat);
  div.appendChild(lblPerSeat);
  return div;
}

function createPlanSeatSection(index) {
  let div = document.createElement('div');
  div.className = 'plan-seat-section';

  let seatInput = document.createElement('input');
  seatInput.setAttribute('type', 'number');
  seatInput.name = 'quantity';
  seatInput.id = index + '-quantity';
  seatInput.className = 'quantity';
  seatInput.defaultValue = 5;
  seatInput.min = 1;

  let btnMinus = document.createElement('button');
  btnMinus.className = 'btn';
  btnMinus.id = index + 'btn';
  btnMinus.addEventListener('click', function () {
    this.parentNode.querySelector('input[type=number]').stepDown();
    calculateTotalPrice();
  });

  let btnPlus = document.createElement('button');
  btnPlus.className = 'btn plus';
  btnPlus.id = index + 'btnplus';
  btnPlus.addEventListener('click', function () {
    this.parentNode.querySelector('input[type=number]').stepUp();
    calculateTotalPrice();
  });

  div.appendChild(btnMinus);
  div.appendChild(seatInput);
  div.appendChild(btnPlus);
  return div;
}

function createPlanTotalCostSection(plan, index) {
  let div = document.createElement('div');
  div.className = 'plan-total-price';
  div.id = index + '-plan-total-price';

  let totalPrice = plan.cost * 5;
  let lbl = document.createElement('Label');
  lbl.setAttribute('for', 'total-price');
  lbl.className = 'total-price';
  lbl.id = index + '-total-price';
  lbl.innerHTML = parseFloat(totalPrice.toFixed(2));

  div.appendChild(lbl);
  return div;
}

// function to create update button
function createUpdateBtn() {
  console.debug('creating update button');
  let btn = document.createElement('button');
  btn.id = 'update-btn';
  btn.className = 'update-btn';
  btn.innerHTML = 'Update Subscription';
  btn.disabled = true;
  btn.addEventListener('click', function () {
    document.getElementById('chosen-product').innerHTML = "PRODUCT : " + chosenProduct;
    updateBtnClickHandler(
      selectedPlanNode.planName,
      selectedPlanNode.seats,
      selectedPlanNode.cost,
      selectedPlanNode.total,
      chosenProduct,
      chosenCurrency
    );
  });
  return btn;
}

function setDefault() {
  productBtnClickEventHandler(chosenProduct);
}

export {
  createCurrencyDropDown,
  createProductButton,
  createPlan,
  createUpdateBtn,
  setDefault,
};
