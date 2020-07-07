import { showFormMsg } from './Update';

function makeButton(text) {
  const button = document.createElement('button');
  button.innerText = text;
  button.className = 'm5'

  return button;
}

function makeInput(text, placeholder) {
  const wrapper = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  wrapper.className = 'm5';
  label.className = 'm-r2';
  label.innerText = text;
  input.placeholder = placeholder;
  input.style.width = 300 + 'px';
  wrapper.append(label, input);

  return wrapper;
}

function formView(dispatch, model) {
  let { description, calories, showForm } = model;
  const addBtn = makeButton('Add meal');
  const cancelBtn = makeButton('Cancel');
  const form = document.createElement('form');

  form.append(
      makeInput('Meal', description),
      makeInput('Calories', calories || ''),
      cancelBtn,
      makeButton('Save'));

  addBtn.addEventListener('click', () => dispatch(showFormMsg(true)));
  cancelBtn.addEventListener('click', () => dispatch(showFormMsg(false)));

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

  wrapper.append(formView(dispatch, model), listField);

  return wrapper;
}

export default view;