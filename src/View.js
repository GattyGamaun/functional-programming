import { showFormMsg, saveMealMsg, saveCaloriesMsg, saveFormMsg } from './Update';

function makeButton(text) {
  const button = document.createElement('button');
  button.innerText = text;
  button.className = 'm5';

  return button;
}

function makeInput(text, placeholder, className) {
  const wrapper = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  wrapper.className = 'm5';
  label.className = 'm-r2';
  label.innerText = text;
  input.classList = className;
  input.placeholder = placeholder;
  input.type = 'text';
  input.style.width = 300 + 'px';

  wrapper.append(label, input);

  return wrapper;
}

function viewForm(dispatch, model) {
  const { showForm, description, calories } = model;
  const mealInput = makeInput('Meal', description, 'meal-input');
  const caloriesInput = makeInput('Calories', calories, 'calories-input');
  const addBtn = makeButton('Add meal');
  const cancelBtn = makeButton('Cancel');
  const saveBtn = makeButton('Save');


  const form = document.createElement('form');

  form.append(
      mealInput,
      caloriesInput,
      cancelBtn,
      saveBtn);

  addBtn.addEventListener('click', () => dispatch(showFormMsg(true)));
  cancelBtn.addEventListener('click', () => dispatch(showFormMsg(false)));
  mealInput.addEventListener('blur', (e) => dispatch(saveMealMsg(e.target.value)));
  caloriesInput.addEventListener('blur', (e) => dispatch(saveCaloriesMsg(e.target.value)));

  if (showForm) {
    return form;
  }

  return addBtn;
}

function view(dispatch, model) {
  const headingElement = document.createElement('h1');
  const wrapper = document.createElement('div');
  const listField = document.createElement('div');

  headingElement.innerText = 'Calorie Counter';
  listField.innerText = JSON.stringify(model, null, 2);
  listField.className = 'list-field';

  wrapper.append(headingElement, viewForm(dispatch, model), listField);

  return wrapper;
}

export default view;