export const NEW_USER = 'NEW_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

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

export const fetchApi = () => (
  async (dispatch) => (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(actionAddCurrencies(currencies)))
  )
);
