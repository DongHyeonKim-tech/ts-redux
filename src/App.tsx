import React from "react";
import "./App.css";
import store from "app/store";
import { Provider } from "react-redux";
import IndexPage from "pages/index/IndexPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSample from "features/sample/MainSample";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<IndexPage />} />
          <Route path={"sample"} element={<MainSample />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
