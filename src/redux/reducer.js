import { RECEIVE_FETCH } from "./action-types";

const defaultState = {
  data: {}
};


// Важно! для REQUEST_FETCH case не пишем, потому что мы его не слушаем - его слушает saga
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_FETCH:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};
