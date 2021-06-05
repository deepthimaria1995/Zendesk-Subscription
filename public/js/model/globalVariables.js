import { PLAN_OUTLINE } from "./planDetails.js";

window.chosenProduct = 'AMAZON';
window.chosenCurrency = 'USD';
window.chosenProductPlan = PLAN_OUTLINE[0].plans;
window.currentPlanNode = {
    AMAZON: {
      planName: 'BASIC',
      seats: 5,
      cost: 1,
      total: 5,
      currency: 'USD',
      product: 'AMAZON',
    },
    NETFLIX: {
      planName: 'BASIC1',
      seats: 5,
      cost: 10,
      total: 50,
      currency: 'USD',
      product: 'NETFLIX',
    },
    DISNEY: {
      planName: 'BASIC2',
      seats: 5,
      cost: 100,
      total: 500,
      currency: 'USD',
      product: 'DISNEY',
    },
  };
window.selectedPlanNode = {
  planName: '',
  seats: '',
  cost: '',
  total: '',
  currency: '',
  product: '',
};