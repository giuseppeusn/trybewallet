import { NEW_ITEM } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_ITEM:
    return { ...state };
  default:
    return state;
  }
};

export default walletReducer;
