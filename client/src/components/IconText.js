import React from "react";
import {Space} from 'antd';

export default function IconText ({ icon, text }) {
    return (
    <Space style>
      {React.createElement(icon)}
      {text}
    </Space>
  )
}