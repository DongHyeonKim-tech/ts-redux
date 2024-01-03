import { createReducer } from "typesafe-actions";

import {
  GetCheckSessionResponseType,
  indexAction,
  indexState,
} from "./indexTypes";
import { GET_TEST_LIST_ERROR, SET_STRING_ARR } from "./indexAction";

import { call, put, takeLatest } from "redux-saga/effects";
import { getIndexList, getMongoDatabaseList } from "./indexAPI";
import {
  getTestListAsync,
  GET_TEST_LIST,
  GET_TEST_LIST_SUCCESS,
  getDatabaseListAsync,
  GET_DATABASE_LIST,
  GET_DATABASE_LIST_SUCCESS,
} from "./indexAction";

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

function* getDabaseListSaga(action: any) {
  try {
    const response: GetCheckSessionResponseType = yield call(
      getMongoDatabaseList,
      action.payload
    );
    yield put(getDatabaseListAsync.success(response));
  } catch (error: any) {
    yield put(getDatabaseListAsync.failure(error));
  }
}

export function* indexSaga() {
  yield takeLatest(GET_TEST_LIST, getTestListSaga);
  yield takeLatest(GET_DATABASE_LIST, getDabaseListSaga);
}

const initialState = {
  indexStringArrData: [],
  arrTestList: [],
  arrDatabaseList: [],
};

export const indexReducer = createReducer<indexState, indexAction>(
  initialState,
  {
    [SET_STRING_ARR]: (state, action) => ({
      ...state,
      indexStringArrData: action.payload,
    }),
    [GET_TEST_LIST_SUCCESS]: (state, action: any) => ({
      ...state,
      arrTestList: action.payload,
    }),
    [GET_TEST_LIST_ERROR]: (state, action: any) => ({
      ...state,
      getTestListError: action,
    }),
    [GET_DATABASE_LIST_SUCCESS]: (state, action: any) => ({
      ...state,
      arrDatabaseList: action.payload,
    }),
  }
);
