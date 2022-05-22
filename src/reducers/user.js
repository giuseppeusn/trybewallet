import { NEW_USER } from '../actions';

const INITIAL_STATE = {
  // email: 'example@example.com',
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_USER:
    return { ...state, email: action.payload.email };
  default:
    return state;
  }
};

export default userReducer;
