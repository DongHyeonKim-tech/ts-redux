import { createAction, createAsyncAction } from "typesafe-actions";
import {
  GetCheckSessionParamType,
  GetCheckSessionResponseType,
} from "./indexTypes";
import { AxiosError } from "axios";

// 액션 타입
export const SET_STRING_ARR = "index/SET_STRING_ARR" as const;

// 액션 생성 함수
export const setStringArr = createAction(SET_STRING_ARR)<string[]>();

// 비동기 액션 타입
export const GET_TEST_LIST = "index/GET_TEST_LIST" as const;
export const GET_TEST_LIST_SUCCESS = "index/GET_TEST_LIST_SUCCESS" as const;
export const GET_TEST_LIST_ERROR = "index/GET_TEST_LIST_ERROR" as const;

// 비동기 액션 생성 함수
export const getTestListAsync = createAsyncAction(
  GET_TEST_LIST,
  GET_TEST_LIST_SUCCESS,
  GET_TEST_LIST_ERROR
)<GetCheckSessionParamType, GetCheckSessionResponseType, AxiosError>();

export const GET_DATABASE_LIST = "index/GET_DATABASE_LIST" as const;
export const GET_DATABASE_LIST_SUCCESS =
  "index/GET_DATABASE_LIST_SUCCESS" as const;
export const GET_DATABASE_LIST_ERROR = "index/GET_DATABASE_LIST_ERROR" as const;

export const getDatabaseListAsync = createAsyncAction(
  GET_DATABASE_LIST,
  GET_DATABASE_LIST_SUCCESS,
  GET_DATABASE_LIST_ERROR
)<{}, GetCheckSessionResponseType, AxiosError>();
