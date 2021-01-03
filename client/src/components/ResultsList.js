import React from "react";
import {List, Avatar} from 'antd';
import {LikeOutlined, StarOutlined, PhoneOutlined, BarChartOutlined, UserOutlined} from '@ant-design/icons';
import IconText from './../components/IconText';
import {useHistory} from "react-router-dom";

import pp from '../images/theFixer.png';

function renderItem(item, history) {
    const {_id, last_name, first_name, profession, phone, description} = item
    let name = last_name + " " + first_name
    return <List.Item
        key={name}
    >
        <List.Item.Meta
            avatar={
                <Avatar
                    size={75}
                    icon={<UserOutlined/>}
                    src={pp}
                />
            }
            title={name}
            description={
                <IconText icon={BarChartOutlined} text={profession} key="list-vertical-profession-o"/>
            }
        />
        {description}
        <br/>
        <IconText icon={PhoneOutlined} text={phone} key="list-vertical-contact-o"/>
        <br/>
        <button onClick={() => {
            history.push("/profile/" + _id)
        }}>Vedi il profilo</button>
    </List.Item>
}

export function ResultsList(props) {
    const history = useHistory();
    const {dataSource} = props
    return (
        <List
            header={<h2>Tutti i nostri professionisti</h2>}
            itemLayout="vertical"
            size="medium"
            dataSource={dataSource}
            renderItem={item => renderItem(item, history)}
        />
    )
}