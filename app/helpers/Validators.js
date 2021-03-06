/**
 * Functions that are used to validate both inputs.
 * For some reason, I was not being able to work with
 * truthy values. That's why this code might look
 * like bad practice.
 */

const isString = (str) => {
  return typeof str === 'string';
};

export const validateEmail = (email) => {
  return isString(email) && email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ? true : false;
};

export const validatePassword = (password) => {
  return isString(password) && password.length ? true : false;
};

export const areInputsValid = (credentials) => {
  const { email, password } = credentials;

  return validateEmail(email) && validatePassword(password) ? true : false;
};
