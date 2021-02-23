export const emailValidator = (email) => {
  return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
};

export const passwordValidator = (password) => {
  return password.length;
};
