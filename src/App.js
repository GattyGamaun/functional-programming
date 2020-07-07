function app(initValue, update, makeView, node) {
  let state = initValue;
  let currentView = makeView(dispatch, state);
  //side effect
  if (node) {
    node.appendChild(currentView);
  }

  function dispatch(action) {
    state = update(action, state);
    let updatedView = makeView(dispatch, state);
    node.replaceChild(updatedView, currentView);
    currentView = updatedView;
  }
}

export default app;