export const NEW_USER = 'NEW_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDITING_EXPENSE = 'EDITING_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const IS_FETCHING = 'IS_FETCHING';

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

export const actionEditing = (edit, id) => ({
  type: EDITING_EXPENSE,
  payload: {
    edit,
    id,
  },
});

export const actionEditExpense = (expenses) => ({
  type: EDIT_EXPENSE,
  payload: {
    expenses,
  },
});

export const actionIsFetching = (bool) => ({
  type: IS_FETCHING,
  payload: {
    isFetching: bool,
  },
});

export const fetchApiAll = (expense, id) => (
  async (dispatch) => {
    dispatch(actionIsFetching(true));
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    const object = { id, ...expense, exchangeRates: data };
    dispatch(actionAddExpense(object));
    dispatch(actionIsFetching(false));
  }
);

export const fetchApi = () => (
  (dispatch) => {
    dispatch(actionIsFetching(true));
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(actionAddCurrencies(currencies)))
      .then(() => dispatch(actionIsFetching(false)));
  }
);
