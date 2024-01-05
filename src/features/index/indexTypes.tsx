import { ActionType } from "typesafe-actions";
import * as actions from "./indexAction";

export interface GetTestListParamType {
  id: string;
}

export interface GetCheckSessionResponseType {
  seq: number;
  subject_id: number;
  test_datetime: string;
  test_type: string;
  result_open_on: string;
  registration_start_date: string;
  registration_end_date: string;
  name: string;
  modified_on: string;
  modified_by: string;
  max_participants: number;
  is_used: boolean;
  is_result_open: boolean;
  is_opened: boolean;
  is_generated_question: boolean;
  created_on: string;
  created_by: string;
}

export type indexAction = ActionType<typeof actions>;
