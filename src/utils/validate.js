const checkValidateData = (email, password, isSignIn) => {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if ((!isValidEmail || !isValidPassword) && isSignIn)
    return "Email or password is incorrect.";
  if (!isValidEmail && !isSignIn) return "Please enter a valid email";
  if (!isValidPassword && !isSignIn)
    return "Password should contain atleast one uppercase letter, one lowercase letter, one number and one special character[@$!%*?&]. Password should be atleast 8 characters long.";
  return null;
};

export { checkValidateData };
