const initModel = 0;

function view(dispatch, model) {
  const div = document.createElement("div");
  const counter = document.createElement("div");

  div.append(
    (counter.innerText = `Counter: ${model}`),
    incrementBtn,
    decrementBtn
  );

  incrementBtn.addEventListener("click", () => dispatch("+"));
  decrementBtn.addEventListener("click", () => dispatch("-"));

  return div;
}

function update(msg, model) {
  switch (msg) {
    case "+":
      return model + 1;
    case "-":
      return model - 1;
    default:
      return model;
  }
}

// impure code below

function app(initModel, view, update, node) {
  let model = initModel;
  let currentView = view(dispatch, model);

  if (node) {
    // side effect
    node.append(currentView);
  }

  function dispatch(msg) {
    model = update(msg, model);
    const updatedView = view(dispatch, model);
    node.replaceChild(updatedView, currentView);
    currentView = updatedView;
  }
}

const incrementBtn = document.createElement("button");
const decrementBtn = document.createElement("button");

incrementBtn.classList.add("button");
incrementBtn.setAttribute("type", "button");
incrementBtn.innerText = "+";
decrementBtn.setAttribute("type", "button");
decrementBtn.innerText = "-";

const main = document.querySelector(".main");
app(initModel, view, update, main);

module.exports = update;