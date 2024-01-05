import client from "api/client";
import {
  GetTestListParamType,
  GetCheckSessionResponseType,
} from "./indexTypes";

export const getIndexList = async (info: GetTestListParamType) => {
  const response = await client.get<GetCheckSessionResponseType>(
    "/assessment/test-list",
    { withCredentials: true, timeout: 10000, params: { id: info.id } }
  );
  return response.data;
  //   return client.get("/assessment/test-list");
};

export const getMongoDatabaseList = async (params: null) => {
  const response = await client.get("/level-measurement/list-database-view", {
    withCredentials: true,
    timeout: 10000,
    params: params,
  });
  return response.data;
};
