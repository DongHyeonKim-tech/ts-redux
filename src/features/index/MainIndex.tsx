// import logo from "./logo.svg";
import React, { useEffect } from "react";
import logo from "logo.svg";
import { RootState } from "app/store";
import { useSelector, useDispatch } from "react-redux";
import { getDatabaseListAsync, getTestListAsync } from "./indexAction";
import { useNavigate } from "react-router-dom";

const MainIndex = () => {
  const navigate = useNavigate();

  const testStringArrData = useSelector(
    (state: RootState) => state.indexReducer.arrTestList
  );
  const arrDatabaseList = useSelector(
    (state: RootState) => state.indexReducer.arrDatabaseList
  );

  useEffect(
    () => console.log("testStringArrData: ", testStringArrData),
    [testStringArrData]
  );

  useEffect(
    () => console.log("arrDatabaseList: ", arrDatabaseList),
    [arrDatabaseList]
  );

  const dispatch = useDispatch();
  const onGetTestList = (id: string) => {
    // dispatch(getIndexList)
    dispatch(getTestListAsync.request({ id: id }));
  };

  const onGetDatabaseList = () => {
    dispatch(getDatabaseListAsync.request({}));
  };

  const onGoSamplePageClick = () => navigate("/sample");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => onGetTestList("1")}>Test List</button>
        <button onClick={() => onGetDatabaseList()}>Mongo Database List</button>
        <button onClick={() => onGoSamplePageClick()}>Go Sample Page</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default MainIndex;
