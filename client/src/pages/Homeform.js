import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, HomeOutlined, SearchOutlined} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/formSlice'

const layout = {
    labelCol: {
        span: 100,
    },
    wrapperCol: {
        span: 100,
    },
};
const tailLayout = {
    wrapperCol: {
        offset:4,
        span: 16,
    },
};

export const HomeForm = () => {
    const history = useHistory();

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const [Operator, setOperator] = useState('')
    const [Place, setPlace] = useState('')
    const [searchRequestStatus, setSearchRequestStatus] = useState('idle')
    const [searchRequestStatusPlace, setSearchRequestStatusPlace] = useState('idle')

    const dispatch = useDispatch()
    const onOperatorChanged = (e) => setOperator(e.target.value)
    const onPlaceChanged = (e) => setPlace(e.target.value)

    const canSave = ([Operator].every(Boolean) && 
                    [Place].every(Boolean) && 
                    searchRequestStatus === 'idle' &&
                    searchRequestStatusPlace ==='idle')

    const onSearchClicked = async () => {
        if (canSave) {
            try {
                setSearchRequestStatus('pending');
                setSearchRequestStatusPlace('pending');
                dispatch(fetchUsers());
                setOperator('');
                history.push("/results");
            } catch (err) {
                console.error('Failed to search: ', err);
            } finally {
                setSearchRequestStatus('idle');
                setSearchRequestStatusPlace('pending');
            }
        }
    }

    return (
        <div className="App-form">
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                rules={[
                    {
                        required: true,
                        message: 'Per favore, inserisci il tipo di professionista che stai cercando',
                    },
                ]}
            >
                <Input 
                type="text"
                id="postTitle"
                name="postTitle"
                onChange={onOperatorChanged}
                prefix={<UserOutlined className="site-form-item-icon" />}
                style={{ color: "#544E61",
                borderColor: "#544E61"  }}
                size="large"
                placeholder="Di che operatore sanitario hai bisogno?"
                value={Operator}/>
            </Form.Item>

            <Form.Item
                rules={[
                    {
                        required: true,
                        message: 'Per favore, inserisci la tua posizione',
                    },
                ]}
            >
                <Input
                type="text"
                id="postTitle"
                name="postTitle"
                onChange={onPlaceChanged}
                prefix={<HomeOutlined className="site-form-item-icon" />}
                style={{ color: "#544E61",
                borderColor: "#544E61" }}
                size="large"
                placeholder="Dove ti trovi?"
                value={Place}/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" style={{ background: "#544E61", 
                borderColor: "#544E61" }} 
                onClick={onSearchClicked}
                icon={<SearchOutlined
                />}>
                  Cerca!
                </Button>
            </Form.Item>
        </Form>
        </div>
    );
};

