// import logo from "./logo.svg";
import React, { useEffect } from "react";
import logo from "logo.svg";
import { RootState } from "app/store";
import { useSelector, useDispatch } from "react-redux";
import { getTestListAsync } from "./indexAction";

const MainIndex = () => {
  const testStringArrData = useSelector(
    (state: RootState) => state.indexReducer.arrTestList
  );

  useEffect(
    () => console.log("testStringArrData: ", testStringArrData),
    [testStringArrData]
  );

  const dispatch = useDispatch();
  const onGetTestList = (id: string) => {
    // dispatch(getIndexList)
    dispatch(getTestListAsync.request({ id: id }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => onGetTestList("1")}>BUTTON</button>
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
