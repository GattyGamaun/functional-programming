const MSGS = {
  SHOW_FORM: 'SHOW_FORM',
  MEAL_INPUT: 'MEAL_INPUT',
  CALORIES_INPUT: 'CALORIES_INPUT',
}

export function showFormMsg(showForm) {
  return {
    type: MSGS.SHOW_FORM,
    showForm,
  };
}

export function saveMealMsg(description) {
  return {
    type: MSGS.MEAL_INPUT,
    description
  }
}

export function saveCaloriesMsg(calories) {
  return {
    type: MSGS.CALORIES_INPUT,
    calories,
  }
}


function update(message, model) {
  switch (message.type) {
    case MSGS.SHOW_FORM:
      const {showForm} = message;
      return {
        ...model,
        showForm,
        description: '',
        calories: 0,
      };
    case MSGS.MEAL_INPUT:
      const { description } = message;
      return {
        ...model,
        description,
      };
    case MSGS.CALORIES_INPUT:
      const { calories } = message;
      return {
        ...model,
        calories: +calories,
      }
  }

  return model;
}

export default update;