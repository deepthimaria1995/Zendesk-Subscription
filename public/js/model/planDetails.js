var PLAN_OUTLINE = [
  {
    product: 'AMAZON',
    plans: [
      {
        planName: 'BASIC',
        cost: 1,
      },
      {
        planName: 'GOOD',
        cost: 10,
      },
      {
        planName: 'BETTER',
        cost: 100,
      },
      {
        planName: 'BEST',
        cost: 1000,
      },
    ],
  },
  {
    product: 'NETFLIX',
    plans: [
      {
        planName: 'BASIC1',
        cost: 2,
      },
      {
        planName: 'GOOD1',
        cost: 20,
      },
      {
        planName: 'BETTER1',
        cost: 200,
      },
      {
        planName: 'BEST1',
        cost: 2000,
      },
    ],
  },
  {
    product: 'DISNEY',
    plans: [
      {
        planName: 'BASIC2',
        cost: 3,
      },
      {
        planName: 'GOOD2',
        cost: 30,
      },
      {
        planName: 'BETTER2',
        cost: 300,
      },
      {
        planName: 'BEST2',
        cost: 3000,
      },
    ],
  },
];

var CURRENCY = {
  USD: {
    name: 'United States Dollar',
    conv: 1,
  },
  AUD: {
    name: 'Australian Dollar',
    conv: 0.77,
  },
  AED: {
    name: 'United Arab Emirates Dirham',
    conv: 0.27,
  },
  INR: {
    name: 'Indian Rupee',
    conv: 0.014,
  },
};

var PRODUCTS = ['AMAZON', 'NETFLIX', 'DISNEY'];

export { PLAN_OUTLINE, CURRENCY, PRODUCTS };
