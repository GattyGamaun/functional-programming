import { showFormMsg, saveMealMsg, saveCaloriesMsg, saveFormMsg } from './Update';

function makeButton(text) {
  const button = document.createElement('button');
  button.innerText = text;
  button.className = 'm5';

  return button;
}

function makeInput(text, placeholder, className, onInput) {
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
  input.onblur = onInput;

  wrapper.append(label, input);

  return wrapper;
}

function viewForm(dispatch, model) {
  let { description, calories, showForm } = model;

  function onSubmit(e) {
    e.preventDefault();
    dispatch(saveFormMsg);
  }

  const addBtn = makeButton('Add meal');
  const cancelBtn = makeButton('Cancel');
  const saveBtn = makeButton('Save');
  const mealInput = makeInput('Meal', description, 'meal-input',
          e => dispatch(saveMealMsg(e.target.value)));
  const caloriesInput = makeInput('Calories', calories || '', 'calories input',
      e => dispatch(saveCaloriesMsg(e.target.value)));

  mealInput.className = 'meal-input';
  caloriesInput.className = 'calories-input';

  const form = document.createElement('form');

  form.append(
      mealInput,
      caloriesInput,
      cancelBtn,
      saveBtn);

  addBtn.addEventListener('click', () => dispatch(showFormMsg(true)));
  cancelBtn.addEventListener('click', () => dispatch(showFormMsg(false)));
  saveBtn.addEventListener('click', onSubmit);

  if (showForm) {
    return form;
  }

  return addBtn;
}

function view(dispatch, model) {
  const wrapper = document.createElement('div');
  const listField = document.createElement('div');

  listField.innerText = JSON.stringify(model, null, 2);
  listField.className = 'list-field';

  wrapper.append(viewForm(dispatch, model), listField);

  return wrapper;
}

export default view;