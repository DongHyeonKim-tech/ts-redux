import React from "react";
import "./App.css";
import store from "app/store";
import { Provider } from "react-redux";
import IndexPage from "pages/index/IndexPage";

function App() {
  return (
    <Provider store={store}>
      <IndexPage />
    </Provider>
  );
}

export default App;
