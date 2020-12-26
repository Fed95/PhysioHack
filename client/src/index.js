import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import {Layout, Row, Col} from 'antd';

import './index.css';
import "./style/profile.css"
import {SearchBar} from "./components/Search"

const { Header, Footer, Content } = Layout;

ReactDOM.render(
  <React.StrictMode>
      <Layout>
          <Header>
              <Row>
                  <Col span={6}>Header</Col>
                  <Col span={16} className={"center"}>
                      <SearchBar />
                  </Col>
                  <Col span={2} />
              </Row>
          </Header>
          <Content className={"content"}>
              <Row className={"contentHeader"}>

              </Row>
              <Row>
                  <Col span={1} />
                  <Col span={22}>
                      <App />
                  </Col>
                  <Col span={1} />
              </Row>
          </Content>
          <Footer>Footer</Footer>
      </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
