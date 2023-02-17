import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name=email]'),
  textarea: document.querySelector('textarea[name=message]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedInputEl = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedInputEl) {
    // refs.input.value = savedInputEl;
    refs.textarea.value = savedInputEl;
  }
}
