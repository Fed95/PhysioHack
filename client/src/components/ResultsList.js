import React from "react";
import {List, Avatar} from 'antd';
import {LikeOutlined, StarOutlined, PhoneOutlined, BarChartOutlined, UserOutlined} from '@ant-design/icons';
import IconText from './../components/IconText';
import {useHistory} from "react-router-dom";

import pp from '../images/theFixer.png';

function renderItem(item, history) {
    const {id, name, profession, contacts, description} = item
    return <List.Item
        onClick={() => {
            history.push("/profile/" + id)
        }}
        key={name}
        actions={[
            <IconText icon={PhoneOutlined} text={contacts} key="list-vertical-contact-o"/>,
            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>
        ]}
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
    </List.Item>
}

export function ResultsList(props) {
    const history = useHistory();
    const {dataSource} = props
    return (
        <List
            header={<h2>Tutti i Fixers</h2>}
            itemLayout="vertical"
            size="medium"
            dataSource={dataSource}
            renderItem={item => renderItem(item, history)}
        />
    )
}