import { createAction, createAsyncAction } from "typesafe-actions";
import {
  GetTestListParamType,
  GetCheckSessionResponseType,
} from "./indexTypes";
import { AxiosError } from "axios";

// 액션 타입
export const SET_STRING_ARR = "index/setStringArr" as const;

// 액션 생성 함수
export const setStringArr = createAction(SET_STRING_ARR)<string[]>();

// 비동기 액션 타입
export const GET_TEST_LIST = "index/getTestList" as const;
export const GET_TEST_LIST_SUCCESS = "index/getTestListSuccess" as const;
export const GET_TEST_LIST_ERROR = "index/getTestListError" as const;

// 비동기 액션 생성 함수
export const getTestListAsync = createAsyncAction(
  GET_TEST_LIST,
  GET_TEST_LIST_SUCCESS,
  GET_TEST_LIST_ERROR
)<GetTestListParamType, GetCheckSessionResponseType, AxiosError>();

export const GET_DATABASE_LIST = "index/getDatabaseList" as const;
export const GET_DATABASE_LIST_SUCCESS =
  "index/getDatabaseListSuccess" as const;
export const GET_DATABASE_LIST_ERROR = "index/getDatabaseListError" as const;

export const getDatabaseListAsync = createAsyncAction(
  GET_DATABASE_LIST,
  GET_DATABASE_LIST_SUCCESS,
  GET_DATABASE_LIST_ERROR
)<{}, GetCheckSessionResponseType, AxiosError>();
