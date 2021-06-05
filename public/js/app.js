import { showElement, hideElement } from './utility/utilityHelper.js';

import {
  createCurrencyDropDown,
  createProductButton,
  createPlan,
  createUpdateBtn,
  setDefault,
} from './view/subscription.js';

import { createBackBtn, createCard } from './view/summary.js';

/*****************************
  
  Mock server code BEGIN
  
*****************************/

$.mockjax({
  url: '/api/current',
  type: 'get',
  responseText: currentPlanNode,
});

$.mockjax({
  url: '/api/current',
  type: 'put',
  responseDelay: 1000,
  response: function (settings) {
    var newData = {
      planName: settings.data.planName,
      seats: settings.data.seats,
      cost: settings.data.cost,
      total: settings.data.seats * settings.data.cost,
      currency: settings.data.currency,
      product: settings.data.product,
    };
    selectedPlanNode = newData;
    this.responseText = newData;
  },
});

/*****************************
  
  Mock server code END

*****************************/

var divLoadPage = document.getElementById('load-page');
var divSubscriptionPage = document.getElementById('subscription-page');
var divSummaryPage = document.getElementById('summary-page');

// function to add the required subscription plans for required products
function loadPage() {
  // configure subscription page
  divSubscriptionPage.appendChild(createCurrencyDropDown());
  divSubscriptionPage.appendChild(createProductButton());
  divSubscriptionPage.appendChild(createPlan(chosenProduct));
  divSubscriptionPage.appendChild(createUpdateBtn());
  setDefault();

  // configure summary page
  divSummaryPage.appendChild(createCard('old', 'Previous Subscription'));
  divSummaryPage.appendChild(createCard('new', 'Updated Subscription'));
  divSummaryPage.appendChild(createBackBtn());
}

loadPage();

hideElement(divLoadPage);
showElement(divSubscriptionPage);
hideElement(divSummaryPage);
