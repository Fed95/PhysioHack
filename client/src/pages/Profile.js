import React from "react";
import {Map} from "../components/Map";
import {Row, Col, List, Divider} from 'antd';
import { LoremIpsum } from "react-lorem-ipsum";

import pp from '../images/theFixer.png'

const locations = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.'
];

const pathologies = [
    {
        title: 'Artrosi',
    },
    {
        title: 'Disfunzioni posturali',
    },
    {
        title: 'Ernia del disco',
    },
    {
        title: 'Linfedema',
    },
    {
        title: 'Dispareunia',
    },
    {
        title: 'Cervicalgia',
    },
];

function Profile() {
    return (
        <Row>
            <Col span={7} className={"padded"}><Map /></Col>
            <Col span={1} />
            <Col span={14} className={"padded"}>
                <Row>
                    <Col>
                        <img src={pp} alt="TheFixer" className={"pp"}/>
                    </Col>
                    <Col span={1} />
                    <Col>
                        <h2>The Fixer</h2>
                        <p>Professional Body Explorer</p>
                    </Col>
                </Row>

                <Divider orientation="left">About</Divider>
                <p><LoremIpsum /></p>
                <Divider orientation="left">Pathologies</Divider>
                <List
                    grid={{
                        gutter: 6,
                        xs: 1,
                        sm: 2
                    }}
                    dataSource={pathologies}
                    renderItem={item => (
                        <List.Item>
                            <a>
                            <div className={"pathology padded"}>{item.title}</div>
                            </a>
                        </List.Item>
                    )}
                />
                <a href={'#'}>View all</a>
                <Divider orientation="left">Locations</Divider>
                <List
                    size="large"
                    dataSource={locations}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </Col>
        </Row>
    );
}

export default Profile;