import { ADD_CURRENCIES, ADD_EXPENSE, DELETE_EXPENSE,
  EDITING_EXPENSE, EDIT_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [
    // {
    //   id: 0,
    //   value: '100',
    //   description: 'teste',
    //   currency: 'USD',
    //   method: 'Dinheiro',
    //   tag: 'Alimentação',
    //   exchangeRates: {
    //     USD: {
    //       ask: '4.88',
    //       code: 'USD',
    //       name: 'Dólar',
    //     },
    //   },
    // },
  ],
  id: 0,
  edit: true,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return { ...state, currencies: action.payload.currencies };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return { ...state, ...action.payload };
  case EDITING_EXPENSE:
    return { ...state, ...action.payload };
  case EDIT_EXPENSE:
    console.log(action.payload);
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default walletReducer;
