// pure
const initValue = 0;

// pure functions

const action = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT'
}

function makeView(dispatch, value) {
  const wrapper = document.createElement('div');
  const buttons = document.createElement('div');
  const text = document.createElement('span');
  const result = document.createElement('span');
  const incrementBtn = document.createElement('button');
  const decrementBtn = document.createElement('button');
  text.innerText = 'Counter: ';
  result.innerText = value;
  incrementBtn.innerText = '+';
  incrementBtn.className = 'increment btn';
  decrementBtn.innerText = '-';
  decrementBtn.className = 'decrement btn';

  incrementBtn.addEventListener('click', () => dispatch(action.ADD));
  decrementBtn.addEventListener('click', () => dispatch(action.SUBTRACT));

  buttons.append(incrementBtn, decrementBtn);
  wrapper.append(text, result, buttons);

  return wrapper;
}

function updateValue(action, value) {
  switch (action) {
    case 'ADD':
      return value + 1;
    case 'SUBTRACT':
      return value - 1;
    default:
      return value;
  }
}

// impure code below

function app(initValue, updateValue, makeView, node) {
  let state = initValue;
  let currentView = makeView(dispatch, state);
  //side effect
  if (node) {
    node.appendChild(currentView);
  }

  function dispatch(action) {
    state = updateValue(action, state);
    let updatedView = makeView(dispatch, state);
    node.replaceChild(updatedView, currentView);
    currentView = updatedView;
  }
}

// side effect
const mainNode = document.querySelector('.main');
app(initValue, updateValue, makeView, mainNode);
// mainNode.appendChild(makeView(updateValue('-', initValue)))

module.exports = updateValue;
