import { createReducer } from "typesafe-actions";

import {
  GetCheckSessionResponseType,
  indexAction,
  indexState,
} from "./indexTypes";
import { SET_STRING_ARR } from "./indexAction";

import { call, put, takeLatest } from "redux-saga/effects";
import { getIndexList } from "./indexAPI";
import { getTestListAsync, GET_TEST_LIST } from "./indexAction";

function* getTestListSaga(action: ReturnType<typeof getTestListAsync.request>) {
  try {
    const response: GetCheckSessionResponseType = yield call(
      getIndexList,
      action.payload
    );
    yield put(getTestListAsync.success(response));
  } catch (error: any) {
    yield put(getTestListAsync.failure(error));
  }
}

export function* indexSaga() {
  yield takeLatest(GET_TEST_LIST, getTestListSaga);
}

const initialState = {
  indexStringArrData: [],
};

export const indexReducer = createReducer<indexState, indexAction>(
  initialState,
  {
    [SET_STRING_ARR]: (state, action) => ({
      ...state,
      indexStringArrData: action.payload,
    }),
  }
);
