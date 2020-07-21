const MSGS = {
  SHOW_FORM: 'SHOW_FORM',
  MEAL_INPUT: 'MEAL_INPUT',
  CALORIES_INPUT: 'CALORIES_INPUT',
  SAVE_MEAL: 'SAVE_MEAL'
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

export const saveFormMsg = {
  type: MSGS.SAVE_MEAL
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
    case MSGS.SAVE_MEAL:
      return saveMeal(message, model);
  }

  return model;
}

function saveMeal(message, model) {
  let {description, calories, nextId, meals} = model;

  return {
    ...model,
    description: '',
    calories: 0,
    nextId: nextId + 1,
    meals: [...meals, {id: nextId, description, calories}],
  }
}

export default update;