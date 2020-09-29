import { DATA_NAMES } from './actionTypes';

export const startFetchData = () => ({
  type: DATA_NAMES.START_FETCH
});

export const failFetchData = (error: any) => ({
  type: DATA_NAMES.FAIL_FETCH,
  payload: error
});

export const finishFetchData = (data: any) => ({
  type: DATA_NAMES.FINISH_FETCH,
  payload: data
});
