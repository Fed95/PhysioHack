import React, {useEffect, useState} from "react";
import Map from "../components/Map";
import {Row, Col, List, Divider, Card, Space} from 'antd';
import {PhoneOutlined} from '@ant-design/icons';
import { useParams, Route } from 'react-router-dom';

import pp from '../images/theFixer.png'

const {Meta} = Card;

function Profile() {
    let { id } = useParams();
    let [profile, setProfile] = useState({});

    const fetchProfile = async id => {
        let response = await fetch('http://localhost:3001/professionals/id/' + id);
        let json = await response.json();
        setProfile(json);
    }

    useEffect( () => {
        fetchProfile(id)
    },[id])

    return (
        <Row>
            <Col span={7} className={"padded"}>
                <Map/>
            </Col>
            <Col span={1}/>

            <Col span={14} className={"padded"}>
                <Row>
                    <Col>
                        <img src={pp} alt="TheFixer" className={"pp"}/>
                    </Col>
                    <Col span={1}/>
                    <Col>
                        <div className={"profile-header"}>
                            <h2>{profile.last_name} {profile.first_name}</h2>
                            <p>{profile.profession}</p>
                            <Space style>
                                {React.createElement(PhoneOutlined)}
                                {profile.phone}
                            </Space>
                        </div>
                    </Col>
                </Row>

                <Divider orientation="left">About</Divider>
                <p>{profile.description}</p>
                <Divider orientation="left">Pathologies</Divider>
                <List
                    grid={{
                        gutter: 6,
                        xs: 1,
                        sm: 2
                    }}
                    dataSource={profile.pathologies}
                    renderItem={item => (
                        <List.Item>
                            <a>
                                <div className={"padded bordered rounded-border"}>{item}</div>
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
                    dataSource={profile.locations}
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