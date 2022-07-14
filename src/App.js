import "antd/dist/antd.min.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ListNote from "./component/ListNote";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { Col, Row } from "antd";
import TodoList from "./component/todoList";

function App() {
  const [dataShow, setDataShow] = useState(null);
  const showMoreData = (value) => {
    console.log("🚀 ~ file: App.js ~ line 10 ~ showMoreData ~ value", value);
    setDataShow(value);
  };
  return (
    <BrowserRouter className="App">
      <Header />
      <Content>
        <Row>
          <Col span={10}>
            <ListNote showMoreData={showMoreData} />
          </Col>
          <Col span={10} offset={2}>
            {dataShow !== null && <TodoList data={dataShow}/>}
          </Col>
        </Row>
      </Content>
      {/* <Layoutt /> */}
      <Footer className="footer">hungnv</Footer>
    </BrowserRouter>
  );
}

export default App;
