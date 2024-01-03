import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";
import { indexReducer, indexSaga } from "features/index/indexReducer";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ indexReducer });

function* rootSaga() {
  yield all([indexSaga()]);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
