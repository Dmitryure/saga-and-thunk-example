// импорт обязательно из redux-saga/effects, а не просто redux-saga
import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_FETCH } from "../action-types";
import { receiveFetch } from "../actions";
import { fetchToDo } from "../../utils/fetchToDo";

// важно чтобы saga была генератором
function* fetchSaga(action) {
  console.log(action);
  try {
    // вызываем функцию фетча с параметрами через запятую
    const data = yield call(fetchToDo, action.data);
    // ВАЖНО! кладем результат в action
    yield put(receiveFetch(data));
  } catch (e) {
    console.log(e);
  }
}

// работает по принципу - увидел action REQUEST_FETCH запускаю функцию fetchSaga
export default function* actionWatcher() {
  yield takeLatest(REQUEST_FETCH, fetchSaga);
}
