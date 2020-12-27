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
        <HomeForm></HomeForm>
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
  <Row style={{
    padding: 30}} />
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
  </div>
  );
};

export default Home;
