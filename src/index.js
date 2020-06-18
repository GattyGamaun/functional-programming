const initModel = 0;

function view(model, dispatch) {
  const div = document.createElement("div");
  const counter = document.createElement("div");

  div.append(
    (counter.innerText = `Counter: ${model}`),
    incrementBtn,
    decrementBtn
  );
  incrementBtn.addEventListener("click", () => dispatch("+"));
  decrementBtn.addEventListener("click", () => console.log("-"));

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

//impure code below

function app(initModel, view, update, node) {
  let model = initModel;
  let currentView = view(model);
  node.append(currentView);

  function dispatch(msg) {
    model = update(msg, model);
    currentView = view(model);
    node.replaceChild(currentView);
  }
}

const incrementBtn = document.createElement("button");
const decrementBtn = document.createElement("button");

incrementBtn.classList.add("button");
incrementBtn.setAttribute("type", "button");
incrementBtn.innerText = "+";
decrementBtn.setAttribute("type", "button");
decrementBtn.innerText = "-";

// incrementBtn.addEventListener("click", () => dispatch("+"));
// decrementBtn.addEventListener("click", () => dispatch("-"));

const main = document.querySelector(".main");
// main.append(view(update("+", initModel)));
app(initModel, view, update, main);
