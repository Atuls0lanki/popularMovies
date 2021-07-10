import { takeEvery, put, call, all } from "redux-saga/effects";
import {
  detailedFailer,
  detailedSuccess,
  movieFailer,
  movieSuccess,
} from "../movies/action";
import { movieApi } from "../movieApi";
import { DETAIL_REQUEST, MOVIES_REQUEST } from "../movies/type";

export function* allMoviesAsync() {
  try {
    const runApi = yield call(movieApi);
    yield put(movieSuccess(runApi));
  } catch (error) {
    yield put(movieFailer(error));
  }
}
export function* allMovies() {
  yield takeEvery(MOVIES_REQUEST, allMoviesAsync);
}

export function* detailPageAsync() {
  try {
    yield put(detailedSuccess());
  } catch (error) {
    yield put(detailedFailer(error));
  }
}
export function* detailView(data) {
  console.log(data);
  yield takeEvery(DETAIL_REQUEST, detailPageAsync);
}

export default function* rootSaga() {
  yield all([call(allMovies), call(detailView)]);
}

// export function* allMovies() {
//   const runApi = movieApi;
//   console.log(runApi);
// }
