import React from "react";
import {Map} from "../components/Map";
import {Row, Col} from 'antd';

import pp from '../images/theFixer.png'

function Profile() {
    return (
        <Row>
            <Col span={7} className={"padded"}><Map /></Col>
            <Col span={1} />
            <Col span={14} className={"padded"}>
                <img src={pp} alt="TheFixer" className={"pp"}/>
                <h2>The Fixer</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
        </Row>
    );
}

export default Profile;