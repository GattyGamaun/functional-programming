const MESSAGES = {
  SHOW_FORM: 'SHOW_FORM',
  MEAL_INPUT: 'SAVE_MEAL',
  CALORIES_INPUT: 'SAVE_CALORIES',
  SAVE_FORM: 'SAVE_FORM',
};

export function showFormMsg(showForm) {
  return {
    type: MESSAGES.SHOW_FORM,
    showForm: showForm,
  }
};

export function saveMealMsg(description) {
  return {
    type: MESSAGES.MEAL_INPUT,
    description,
  }
};

export function saveCaloriesMsg(calories) {
  return {
    type: MESSAGES.CALORIES_INPUT,
    calories,
  }
};

export const saveFormMsg = { type: MESSAGES.SAVE_FORM }

function update(action, model) {
  switch (action.type) {
    case MESSAGES.SHOW_FORM:
      const { showForm } = action;
      return {
        ...model,
        showForm,
        description: '',
        calories: 0,
      };
    case MESSAGES.MEAL_INPUT:
      const { description } = action;
      return {
        ...model,
        description: description,
      }
    case MESSAGES.CALORIES_INPUT:
      const { calories } = action;
      return {
        ...model,
        calories: parseInt(calories),
      }
    case MESSAGES.SAVE_FORM:
      return addMeal(action, model);
  }
  return model;
}

function addMeal(action, model) {
  const { nextId, description, calories } = model;
  const meal = { id: nextId, description, calories };
  const meals = [...model.meals, meal];

  return {
    ...model,
    nextId: nextId + 1,
    description: '',
    calories: 0,
    meals: meals
  }
}

export default update;