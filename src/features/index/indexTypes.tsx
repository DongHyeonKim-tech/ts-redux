import { ActionType } from "typesafe-actions";

import * as actions from "./indexAction";

export type indexState = {
  indexStringArrData: string[];
};

export type indexAction = ActionType<typeof actions>;

export interface GetCheckSessionParamType {
  id: string;
}

export interface GetCheckSessionResponseType {
  code: string;
  message: string;
  payload: any;
}
