import axios from "axios";

const authenticate = async (mode, email, password) => {
  const API_KEY = "AIzaSyA1BMPegTamAZx9erwDTfOlsp4FzsOB25g";
  const main_url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=`;

  const res = await axios.post(main_url + API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = res.data.idToken;
  return token;
};

export const createUser = (email, password) => {
  return authenticate("signUp", email, password);
};

export const login = (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
