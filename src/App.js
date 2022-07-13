import "antd/dist/antd.min.css";
import Home from "./component/Home";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <Home />
    </BrowserRouter>
  );
}

export default App;
