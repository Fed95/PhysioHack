import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './redux/store';
import 'antd/dist/antd.css';
import {Layout, Row, Col, Input, Button} from 'antd';
import {UserOutlined, HomeOutlined, SearchOutlined} from '@ant-design/icons';

import './index.css';
import "./style/profile.css"
import {SearchBar} from "./components/Search"

const {Header, Footer, Content} = Layout;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Layout>
                <Header>
                    <Row style={{textAlign: 'center', alignItems: 'center'}}>
                        <Col span={6}>PhysioHack!</Col>
                        <Col span={6} className={"center"}>
                            <SearchBar
                                placeholder="Cerca?"
                            />
                        </Col>
                        <Col span={6} className={"center"}>
                            <SearchBar
                                placeholder="Cerca?"
                            />
                        </Col>
                        <Col span={5} className={"center"}>
                            <Button type="primary" style={{
                                background: "#544E61",
                                borderColor: "#544E61"
                            }}
                                    icon={<SearchOutlined/>}>
                                Cerca!
                            </Button>
                        </Col>
                        <Col span={2}/>
                    </Row>
                </Header>
                <Content className={"content"}>
                    <Row className={"contentHeader"}>

                    </Row>
                    <Row style={{textAlign: 'center', alignItems: 'center'}}>
                        <Col span={1}/>
                        <Col span={22}>
                            <App/>
                        </Col>
                        <Col span={1}/>
                    </Row>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
