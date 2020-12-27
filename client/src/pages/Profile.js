import React from "react";
import {Map} from "../components/Map";
import {Row, Col, List, Divider, Card} from 'antd';
import { LoremIpsum } from "react-lorem-ipsum";

import pp from '../images/theFixer.png'

const { Meta } = Card;

const locations = [
    {
        name: 'ASC - Physiotherapy',
        address: 'Via Terraggio, 9, Milano'
    },
    {
        name: 'Artemedica (possibilità di parcheggio interno)',
        address: 'Via Privata Belgirate, 15, Milano'
    },
    {
        name: 'Centro UNIQUE',
        address: 'Via Egidio Gorra, 55/C, Piacenza'
    }
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
                            <div className={"padded bordered"}>{item.title}</div>
                            </a>
                        </List.Item>
                    )}
                />
                <a href={'#'}>View all</a>
                <Divider orientation="left">Locations</Divider>
                <List
                    grid={{
                        gutter: 6,
                        xs: 1,
                        sm: 1,
                        md: 1,
                        lg: 1,
                        xl: 1,
                        xxl: 1,
                    }}
                    dataSource={locations}
                    renderItem={item => (
                        <List.Item>
                            <Card className={"padded bordered location"}
                                hoverable
                                style={{ width: 240 }}
                            >
                                <Meta title={item.name} description={item.address} />
                            </Card>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    );
}

export default Profile;