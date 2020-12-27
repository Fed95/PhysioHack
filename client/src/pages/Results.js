import React from "react";
import Map from "../components/Map";
import {ResultsList} from "../components/ResultsList";
import { Row, Col} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Route, Switch } from "react-router-dom";

function Results() {
    let professionals = useSelector((state) => state.users)
    if (professionals != null && professionals.length > 0){
        return(
            <Row>
                <Col span={12} className={"padded"} >
                    <Map />
                </Col>
                <Col span={1} />
                <Col span={10} className={"padded"}>
                    <ResultsList
                        dataSource={professionals}
                    />
                </Col>
            </Row>
        )
    }
    return(<Redirect to="/" />)
}

export default Results;