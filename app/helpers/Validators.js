export const isEmailValid = (email) => {
  const _email = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

  return !_email ? _email : _email.length;
};

export const isPasswordValid = (password) => {
  return password.length;
};

export const areBothValid = (email, password) => {
  return isEmailValid(email) && isPasswordValid(password);
};
