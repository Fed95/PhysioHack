import React from "react";
import Map from "../components/Map";
import {Row, Col, List, Divider, Card, Space} from 'antd';
import {PhoneOutlined} from '@ant-design/icons';
import {LoremIpsum} from "react-lorem-ipsum";

import pp from '../images/theFixer.png'

const {Meta} = Card;

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
        name: 'Casa TUA',
        address: 'Ndo te pare 42'
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
            {/*
                <Col span={7} className={"padded"}>
                    <div className={"shadowed rounded-border"}>
                        <Map/>
                    </div>
                </Col>
            <Col span={1}/>
            */}
            <Col span={14} className={"padded"}>
                <Row>
                    <Col>
                        <img src={pp} alt="TheFixer" className={"pp"}/>
                    </Col>
                    <Col span={1}/>
                    <Col>
                        <div className={"profile-header"}>
                            <h2>The Fixer</h2>
                            <p>Professional Body Explorer</p>
                            <Space style>
                                {React.createElement(PhoneOutlined)}
                                {"+39 12345678"}
                            </Space>
                        </div>
                    </Col>
                </Row>

                <Divider orientation="left">About</Divider>
                <p><LoremIpsum/></p>
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
                                <div className={"padded bordered rounded-border"}>{item.title}</div>
                            </a>
                        </List.Item>
                    )}
                />
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
                            <Card className={"location padded bordered rounded-border"}
                                  hoverable
                                  style={{width: 240}}
                            >
                                <Meta title={item.name} description={item.address}/>
                            </Card>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    );
}

export default Profile;