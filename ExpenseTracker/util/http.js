import axios from "axios";

const backend_url = "https://expensetracker-a7dbc-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData) => {
  const res = await axios.post(backend_url + "/expenses.json", expenseData);
  const id = res.data.name;
  return id;
};

export const fetchExpenses = async () => {
  const res = await axios.get(backend_url + "/expenses.json");
  const expenses = [];
  for (const key in res.data) {
    const expenseObj = {
      id: key,
      amount: res.data[key].amount,
      date: new Date(res.data[key].date),
      description: res.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};

export const updateExpense = (id, expenseData) => {
  return axios.put(backend_url + `/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
  return axios.delete(backend_url + `/expenses/${id}.json`);
};
