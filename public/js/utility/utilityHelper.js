// function to show an HTML tag using ID
// elementId : ID of the HTML tag
function showElement(elementId) {
  console.debug('showing element ' + elementId);
  if (elementId) elementId.style.display = 'block';
}

// function to hide an HTML tag using ID
// elementId : ID of the HTML tag
function hideElement(elementId) {
  console.debug('hiding element ' + elementId);
  if (elementId) elementId.style.display = 'none';
}

// function to disable/enable a button given its ID
// btnId : ID of the button
// isDisable : (boolean) true -> disable, false -> enable
function disableButton(btnId, isDisable) {
  console.debug(btnId + 'element disable = ' + isDisable);
  if (btnId && isDisable !== null) {
    btnId.disabled = isDisable;
  }
}

// function to select a given element
function selectElement(elementId) {
  console.debug('selecting element ' + elementId);
  let ele = document.getElementById(elementId);
  if (!ele.classList.contains('selected')) ele.classList.add('selected');
}

// function to deselect a given element
function deselectElement(elementId) {
  console.debug('deselecting element ' + elementId);
  var ele = document.getElementById(elementId);
  if (ele.classList.contains('selected')) ele.classList.remove('selected');
}

export {
  showElement,
  hideElement,
  disableButton,
  selectElement,
  deselectElement,
};
