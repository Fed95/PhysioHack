import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchUsers } from '../redux/formSlice';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import {HomeForm} from './Homeform';
import { Divider } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function Home() {
  return (
  <div className="App">
  <Row style={{
    textAlign: 'center',
    alignItems: 'center'}}>
    <Col span={7}/>
      <Col span={10} className="center"> 
      <Card  
       style={{ width: 200,
          backgroundColor: "transparent"}}
        cover={
        <img  
        alt="example"
        src="https://www.spotphysio.ca/uploads/1/0/4/7/104728605/band-stretch-png_3.png"
        />
        }
      >
      </Card>
      </Col>
  </Row>
  <Row style={{
    padding: 1,
    textAlign: 'center',
    alignItems: 'center'}}>
      <Col span={24} className="center"> 
      <Card  
       style={{ width: 1500}}
        bodyStyle={{backgroundColor: "lightblue"}}>
        <HomeForm/>
      </Card>
      </Col>
  </Row>
  <Divider plain> . . . </Divider>
  <Row>
  <Col span={7}/>
    <Col span={7}>
      <Card bodyStyle={{backgroundColor: "lightblue"}} 
        style={{ width: 250, 
        backgroundColor: "transparent"}}
        cover={
        <img style={{backgroundColor: "#EFF7F6"}} 
        alt="example"
        src="https://image.flaticon.com/icons/png/512/387/387561.png"
        />
        }
        >
        <Meta
          title="I nostri professionisti"
          description="Clicca qui per saperne di più"
        />
      </Card>
    </Col>
    <Col span={8} style={{alignItems: 'right'}}>
      <Card bodyStyle={{backgroundColor: "lightblue"}} 
          style={{ width: 250,
          backgroundColor: "transparent"}}
          cover={
          <img style={{backgroundColor: "#EFF7F6"}} 
          alt="example"
          src="https://images-na.ssl-images-amazon.com/images/I/41lCmegiT5L.png"
        />
        }
        >
        <Meta
          title="Il nostro team"
          description="Clicca qui per saperne di più"
        />
      </Card>
    </Col>
  </Row>
  <Row style={{ padding: 30}} />
  </div>
  );
};

export default Home;
