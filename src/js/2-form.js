const feedbackForm = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formDataFromLS === null) {
    return;
  }

  Object.assign(formData, formDataFromLS);

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      feedbackForm.elements[key].value = formDataFromLS[key];
    }
  }
};
fillFormFields();

const inputText = event => {
  const propKey = event.target.name;

  formData[propKey] = event.target.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onSubmit = event => {
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  } else {
    console.log(formData);
    event.preventDefault();
    event.target.reset();
    Object.keys(formData).forEach(key => (formData[key] = ''));
    localStorage.removeItem('feedback-form-state');
  }
};

feedbackForm.addEventListener('input', inputText);
feedbackForm.addEventListener('submit', onSubmit);
