import './App.css';
import Home from './pages/Home';
import Results from "./pages/Results";
import Profile from "./pages/Profile";

import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Button, Col, Layout, Row} from "antd";
import {SearchBar} from "./components/Search";
import {SearchOutlined} from "@ant-design/icons";
import {Breadcrumbs} from "./components/Breadcrumbs";

const {Header, Footer, Content} = Layout;

function App() {
    return (
        <Layout>
            <Header>
                <Row style={{textAlign: 'center', alignItems: 'center'}}>
                    <Col span={6}>
                        PhysioHack!
                    </Col>
                    {/*<Col span={6} className={"center"}>
                      <SearchBar
                          placeholder="Cerca?"
                      />
                  </Col>
                    <Col span={12} className={"center"}>
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
                    <Col span={2}/>*/}
                </Row>
            </Header>
            <Content className={"content"}>
                <Row className={"contentHeader center"}>
                    <Breadcrumbs/>
                </Row>
                <Row>
                    <Col span={1}/>
                    <Col span={22}>
                        {/*MAIN APP CONTENT*/}
                        <Router>
                            <div>
                                <Switch>
                                    <Route path="/results">
                                        <Results/>
                                    </Route>
                                    <Route path="/profile/:id">
                                        <Profile/>
                                    </Route>
                                    <Route path="/">
                                        <Home/>
                                    </Route>
                                </Switch>
                            </div>
                        </Router>
                    </Col>
                    <Col span={1}/>
                </Row>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}

export default App;
