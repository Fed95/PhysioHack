import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

export function Breadcrumbs() {
    return <Breadcrumb>
        <Breadcrumb.Item href="home">
            <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="results">
            <UserOutlined />
            <span>Search Results</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
            <span>The Fixer</span>
        </Breadcrumb.Item>
    </Breadcrumb>
}