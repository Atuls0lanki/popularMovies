import {
  DETAIL_FAILER,
  DETAIL_REQUEST,
  DETAIL_SUCCESS,
  MOVIES_FAILER,
  MOVIES_REQUEST,
  MOVIES_SUCCESS,
} from "./type";

export const movieRequest = () => ({
  type: MOVIES_REQUEST,
});

export const movieSuccess = (movie) => ({
  type: MOVIES_SUCCESS,
  payload: movie,
});

export const movieFailer = (error) => ({
  type: MOVIES_FAILER,
  payload: error,
});

export const detailedRequest = (data) => ({
  type: DETAIL_REQUEST,
  payload: data,
});

export const detailedSuccess = () => ({
  type: DETAIL_SUCCESS,
});

export const detailedFailer = (error) => ({
  type: DETAIL_FAILER,
  payload: error,
});
