import { backBtnClickHandler } from '../controllers/eventHandlers.js';

// function to create a summary card
function createCard(prefix, heading) {
  let div = document.createElement('div');
  div.className = prefix + ' column';

  let h4 = document.createElement('h4');
  h4.innerHTML = heading;
  div.appendChild(h4);

  div.appendChild(createRow('Plan', prefix + '-plan'));
  div.appendChild(createRow('Seats', prefix + '-seats'));
  div.appendChild(createRow('Price', prefix + '-cost'));

  return div;
}

//  function to create a row in summary card
function createRow(label, id) {
  let div = document.createElement('div');
  div.className = 'row';

  let spanLabel = document.createElement('span');
  spanLabel.className = 'label';
  spanLabel.innerHTML = label;

  let spanValue = document.createElement('span');
  spanValue.className = 'value';
  spanValue.id = id;
  spanValue.innerHTML = '';

  div.appendChild(spanLabel);
  div.appendChild(spanValue);

  return div;
}

//  function to create back button
function createBackBtn(){
  console.debug('creating back btn');
  let div = document.createElement('div');
  div.className = 'done-page-button-section';

  let btn = document.createElement('button');
  btn.id = 'back-btn';
  btn.className = 'back-btn';
  btn.innerHTML = 'Back';
  btn.addEventListener('click', function () {
    backBtnClickHandler();
  });

  div.appendChild(btn);

  return div;
}

export { createBackBtn, createCard };
