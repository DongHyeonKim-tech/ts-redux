import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/store";

const MainSample = () => {
  const arrDatabaseList = useSelector(
    (state: RootState) => state.indexReducer.getDatabaseList
  );

  const onCheckDatabaseList = () =>
    console.log("arrDatabaseList: ", arrDatabaseList);

  useEffect(
    () => console.log("samplePage: ", arrDatabaseList),
    [arrDatabaseList]
  );
  return (
    <div>
      <p>MainSample</p>
      <button onClick={() => onCheckDatabaseList()}>check database list</button>
    </div>
  );
};

export default MainSample;
