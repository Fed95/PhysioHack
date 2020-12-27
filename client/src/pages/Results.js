import React from "react";
import Map from "../components/Map";
import {ResultsList} from "../components/ResultsList";
import { Row, Col} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Route, Switch } from "react-router-dom";

const description = 'laureato pieni voti. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

const places = [
    {
      name: 'Giorgio',
      profession: 'fixer',
      contacts: '800-900-313',
      description: description
    },
    {
      name: 'Mario',
      profession: 'fixer',
      contacts: '800-673-313',
      description: description
    },
    {
      name: 'Francesca',
      profession: 'fixer',
      contacts: '800-900-242',
      description: description
    },
    {
      name: 'Alessandra',
      profession: 'fixer',
      contacts: '253-900-313',
      description: description
    },
    {
      name: 'Luigi',
      profession: 'fixer',
      contacts: '800-900-313',
      description: description
    },
    {
      name: 'Anna',
      profession: 'fixer',
      contacts: '800-900-313',
      description: 'laureato pieni voti'
    },
];

function Results() {
    return (
    <Row>
        <Col span={12} className={"padded"} >
            <Map />
        </Col>
        <Col span={1} />
        <Col span={10} className={"padded"}>
            <ResultsList 
                dataSource={places}
            />
        </Col>
    </Row>
    );
/*
function Results() {
    let users = useSelector((state) => state.users)

    if (users != null && users.length > 0){
        return(
            <div>
                <h2>{users[0].address}</h2>
            </div>
        )
    }
    return(<Redirect to="/" />)
*/
}

export default Results;