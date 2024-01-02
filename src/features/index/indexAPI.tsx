import client from "api/client";
import {
  GetCheckSessionParamType,
  GetCheckSessionResponseType,
} from "./indexTypes";

export const getIndexList = async (info: GetCheckSessionParamType) => {
  const response = await client.get<GetCheckSessionResponseType>(
    "/assessment/test-list",
    { withCredentials: true, timeout: 10000, params: { id: info.id } }
  );
  return response.data;
  //   return client.get("/assessment/test-list");
};
