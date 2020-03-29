import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./redux/reducer";
import "./index.css";
import App from "./App";
// импортируем все связанное с saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/sagas/sagas'

// создаем "instance" саги
const saga = createSagaMiddleware();

// чтобы можно было использовать редакс devtools с middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// создаем store, подключая middleware с помощью applyMiddleware
const store = createStore(reducer, composeEnhancers(applyMiddleware(saga)));

// запускаем saga (можно обмануть и послать в аргументе ( function*(){} ) потому что saga требует генератор)
saga.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
