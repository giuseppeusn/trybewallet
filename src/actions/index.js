export const NEW_USER = 'NEW_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const actionNewUser = (user) => ({
  type: NEW_USER,
  payload: {
    email: user,
  },
});

export const actionAddCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: {
    currencies: Object.keys(currencies).filter((e) => e !== 'USDT'),
  },
});

export const actionAddExpense = (expenses) => ({
  type: ADD_EXPENSE,
  payload: {
    ...expenses,
  },
});

export const actionDeleteExpense = (expenses) => ({
  type: DELETE_EXPENSE,
  payload: {
    expenses,
  },
});

export const fetchApiAll = (expense, id) => (
  async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    const object = { id, ...expense, exchangeRates: data };
    dispatch(actionAddExpense(object));
  }
);

export const fetchApi = () => (
  (dispatch) => (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(actionAddCurrencies(currencies)))
  )
);
