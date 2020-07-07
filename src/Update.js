const MESSAGES = {
  SHOW_FORM: 'SHOW_FORM',
}

export function showFormMsg(showForm) {
  return {
    type: MESSAGES.SHOW_FORM,
    showForm: showForm,
  }
}

function update(action, model) {
  switch (action.type) {
    case MESSAGES.SHOW_FORM:
      const { showForm } = action;
      return {...model, showForm };
  }
  return model;
}

export default update;