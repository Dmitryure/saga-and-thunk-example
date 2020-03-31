import { REQUEST_FETCH, RECEIVE_FETCH } from "./action-types";

// этот action будет запускать сагу
export const requestFetch = data => {
  return { type: REQUEST_FETCH, data };
};

// этот action будет класть data из fetch'a с помощью редьюсера
export const receiveFetch = data => {
  return { type: RECEIVE_FETCH, data };
};
