import React from "react"
import {UserOutlined} from "@ant-design/icons";
import {Input} from "antd";

export function SearchBar() {
    return <Input placeholder="What are you looking for?" prefix={<UserOutlined />} />
}
