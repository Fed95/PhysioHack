import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useHistory } from "react-router-dom";

import { fetchUsers } from '../redux/formSlice'

import { Row, Col } from 'antd';
import { Image } from 'antd';
import 'antd/dist/antd.css';
import {HomeForm} from './Homeform';
import { Form, Layout, Divider, Tooltip } from 'antd';
import { UserOutlined, HomeOutlined, SearchOutlined} from '@ant-design/icons';
import { Typography, Space } from 'antd';
const { Text, Link, Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
    const [address, setAddress] = useState('')
    const [searchRequestStatus, setSearchRequestStatus] = useState('idle')

    const dispatch = useDispatch()
    const history = useHistory();
    const onAddressChanged = (e) => setAddress(e.target.value)

    const canSave = [address].every(Boolean) && searchRequestStatus === 'idle'

    const onSearchClicked = async () => {
        if (canSave) {
            try {
                setSearchRequestStatus('pending');
                dispatch(fetchUsers());
                setAddress('');
                history.push("/results");
            } catch (err) {
                console.error('Failed to search: ', err);
            } finally {
                setSearchRequestStatus('idle');
            }
        }
    }

    return (
        <div className="App">
            <Row style={{
                textAlign: 'center',
                alignItems: 'center'}}>
                <Col span={24}>
                    <Image
                        width={800}
                        src="https://eliteorthocare.com/images/wp10523cbf_06.png"
                    />
                </Col>
            </Row>
            <Divider plain> . . . </Divider>
            <Row style={{backgroundColor: "lightblue",
                padding: 10,
                textAlign: 'center',
                alignItems: 'center'}}>
                <Col span={24}>
                    <HomeForm></HomeForm>
                </Col>
            </Row>
            <Divider plain> . . . </Divider>
            <Row>
                <Col span={10} className={"center"}>
                    <Image
                        width={150}
                        src={"https://image.flaticon.com/icons/png/512/387/387561.png"}
                    />
                </Col>
                <Col span={14} className={"center"}>
                    <Title level={2}>Our Professionists</Title>
                </Col>
            </Row>
            <section>
                <h2>Search</h2>
                <form>
                    <label htmlFor="postTitle">Address:</label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        placeholder="Insert your address"
                        value={address}
                        onChange={onAddressChanged}
                    />
                    <button type="button" onClick={onSearchClicked} disabled={!canSave}>
                        Search
                    </button>
                </form>
            </section>
            <Row style={{
                textAlign: 'center',
                alignItems: 'center'}}>
                <Col span={10} className={"center"}>
                    <Title level={2}>Our Team</Title>
                </Col>
                <Col span={14} className={"center"}>
                    <Image
                        width={150}
                        src={"https://images-na.ssl-images-amazon.com/images/I/41lCmegiT5L.png"}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Home;