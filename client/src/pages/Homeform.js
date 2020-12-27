import React from 'react';
import { Form, Input, Button, Tooltip, Checkbox } from 'antd';
import { UserOutlined, HomeOutlined, SearchOutlined} from '@ant-design/icons';
import { Typography, Space } from 'antd';
import { useHistory } from "react-router-dom";
const { Text, Link } = Typography;

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

    const routeChange = () =>{ 
        let path = '/results'; 
        history.push(path);
      }

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

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
                prefix={<UserOutlined className="site-form-item-icon" />}
                style={{ color: "#544E61",
                borderColor: "#544E61"  }}
                size="large"
                placeholder="Di che operatore sanitario hai bisogno?"/>
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
                prefix={<HomeOutlined className="site-form-item-icon" />}
                style={{ color: "#544E61",
                borderColor: "#544E61" }}
                size="large"
                placeholder="Dove ti trovi?"/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" style={{ background: "#544E61", 
                borderColor: "#544E61" }} 
                onClick={routeChange}
                icon={<SearchOutlined
                />}>
                  Cerca!
                </Button>
            </Form.Item>
        </Form>
        </div>
    );
};

