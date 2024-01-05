import { takeLatest } from "redux-saga/effects";
import { getIndexList, getMongoDatabaseList } from "./indexAPI";
import { GET_TEST_LIST, GET_DATABASE_LIST } from "./indexAction";
import { createRequestSaga, reducerUtils } from "utils/asyncUtils";
import { createSlice } from "@reduxjs/toolkit";
import { createActionState, handleAsyncAction } from "utils/asyncUtils";

const prefix = "index";

const initialState = {
  getTestList: reducerUtils.init(),
  getDatabaseList: reducerUtils.init(),
};

const defaultState = {
  [GET_TEST_LIST]: "getTestList",
  [GET_DATABASE_LIST]: "getDatabaseList",
};

const getTestListSaga = createRequestSaga(GET_TEST_LIST, getIndexList);
const getDatabaseListSaga = createRequestSaga(
  GET_DATABASE_LIST,
  getMongoDatabaseList
);

export function* indexSaga() {
  yield takeLatest(GET_TEST_LIST, getTestListSaga);
  yield takeLatest(GET_DATABASE_LIST, getDatabaseListSaga);
}

export const indexSlice = createSlice({
  name: prefix,
  initialState,
  reducers: {
    getTestList: (state, action) => {},
    getDatabaseList: (state, action) => {},
  },
  // 서버통신 reducer
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {
        return action.type.includes(prefix);
      },
      (state: any, action) => {
        state[createActionState(action, defaultState)] =
          handleAsyncAction(action); // 변경 사항
      }
    );
  },
});
