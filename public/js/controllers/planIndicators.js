import { selectElement, deselectElement } from "../utility/utilityHelper.js";

// function to add 'current' class to indicate current plan
function setCurrentPlan(index) {
    document
      .getElementById(index + '-plan-indicator-section')
      .classList.add('current');
    document
      .getElementById(index + '-plan-name-indicator')
      .classList.add('current');
    document.getElementById(index + '-container').classList.add('current');
  }
  
  // function to remove 'current' class to indicate current plan
  function unsetCurrentPlan(index) {
    document
      .getElementById(index + '-plan-indicator-section')
      .classList.remove('current');
    document
      .getElementById(index + '-plan-name-indicator')
      .classList.remove('current');
    document.getElementById(index + '-container').classList.remove('current');
  }
  
  // function to add 'selected' class to indicate current plan
  function setSelectedPlan(index) {
    console.debug('setting selected plan');
    selectElement(index + '-container');
    selectElement(index + '-plan-indicator-section');
    selectElement(index + '-plan-name-indicator');
    selectElement(index + '-plan-name-section');
    selectElement(index + '-plan-cost-section');
    selectElement(index + '-quantity');
    selectElement(index + '-plan-total-price');
    selectElement(index + '-line');
    selectElement(index + 'btn');
    selectElement(index + 'btnplus');
  }
  
  // function to remove 'selected' class to indicate current plan
  function unsetSelectedPlan(index) {
    console.debug('setting selected plan');
    deselectElement(index + '-container');
    deselectElement(index + '-plan-indicator-section');
    deselectElement(index + '-plan-name-indicator');
    deselectElement(index + '-plan-name-section');
    deselectElement(index + '-plan-cost-section');
    deselectElement(index + '-quantity');
    deselectElement(index + '-plan-total-price');
    deselectElement(index + '-line');
    deselectElement(index + 'btn');
    deselectElement(index + 'btnplus');
  }

  // indicate current plan of the selected product
function indicateCurrentPlan(currentPlanName) {
  console.debug('setting current plan');
    for (let index in chosenProductPlan) {
      // get current indicator.innerHTML of each plan
      let indicator = document.getElementById(index + '-plan-name-indicator');
  
      if (chosenProductPlan[index].planName === currentPlanName) {
        if (indicator.innerHTML === '') {
          setCurrentPlan(index);
          indicator.innerHTML = 'CURRENT PLAN';
        } else if (indicator.innerHTML === 'SELECTED PLAN') {
          unsetSelectedPlan(index);
          indicator.innerHTML = 'CURRENT PLAN';
          setCurrentPlan(index);
        }
  
        // update the current plan
        currentPlanNode[chosenProduct] = {
          planName: document.getElementById(index + '-plan-name').textContent,
          cost: document.getElementById(index + '-cost-per-seat').textContent,
          seats: document.getElementById(index + '-quantity').value,
          total: document.getElementById(index + '-total-price').textContent,
          currency: chosenCurrency,
          product: chosenProduct,
        };
      }
      // indicate all other plans as normal plans
      else {
        if (indicator.innerHTML === 'CURRENT PLAN') {
          indicator.innerHTML = '';
          unsetCurrentPlan(index);
        }
      }
    }
  }

  export {setCurrentPlan, unsetCurrentPlan, setSelectedPlan, unsetSelectedPlan, indicateCurrentPlan}