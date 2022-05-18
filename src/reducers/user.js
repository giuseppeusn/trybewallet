import { NEW_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_USER:
    return { ...state };
  default:
    return state;
  }
};

export default userReducer;
