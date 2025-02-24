const feedbackForm = document.querySelector('.feedback-form');
let formDataFromEL = {};

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formDataFromLS === null) {
    return;
  }
  formDataFromEL = formDataFromLS;

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      feedbackForm.elements[key].value = formDataFromLS[key];
    }
  }
};
fillFormFields();

const inputText = event => {
  const propKey = event.target.name;
  formDataFromEL[propKey] = feedbackForm.elements[propKey].value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formDataFromEL));
};

const onSubmit = event => {
  if (
    formDataFromEL.email === undefined ||
    formDataFromEL.message === undefined ||
    formDataFromEL.email === '' ||
    formDataFromEL.message === ''
  ) {
    return alert('Fill please all fields');
  } else {
    console.log(formDataFromEL);
    event.preventDefault();
    event.target.reset();
    formDataFromEL = {};
    localStorage.removeItem('feedback-form-state');
  }
};
feedbackForm.addEventListener('input', inputText);
feedbackForm.addEventListener('submit', onSubmit);
