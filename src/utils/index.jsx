export const isValidEmail = (email) => {
  // Regular expression to match a basic email format
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};
