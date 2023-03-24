import React from "react";
import { Card } from 'antd';
import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Descriptions } from 'antd';

import { Menu } from 'antd';
import { useState } from 'react';
import "./UserInfo.css";
import "../CardDetail/CardDetail.css";

import { Profile } from "../Auth0/profile";
import { useAuth0 } from "@auth0/auth0-react";

const imgProvisoria = require("../Assets/a-way-out-ps5-retro.jpg")

const { Meta } = Card;

function getItem(label, key, icon, children, type) {



  return {
    key,
    icon,
    children, 
    label,
    type,
  };
}


const items = [
  getItem('Dashboard', null, <MailOutlined />, [
      getItem('Analytics finance', '1'),
  ]),

  getItem('Articles', 'sub2', <AppstoreOutlined />, [
      getItem('New Product', '1'),
      getItem('Modify User', '2'),
      getItem('Modify Games', '3'),
      getItem('List Products', '4'),
      getItem('See Payments ', '5'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ])

];

function UserInfo() {
    const { user, isAuthenticated, isLoading, loginWithPopup } = useAuth0();

  const [theme, setTheme] = useState('ligth');
  const [current, setCurrent] = useState('1');

  const onClick = (e) => {  
    console.log('click ', e);
    setCurrent(e.key);
  };

  


  return (

    <div className="menuProfileInfo">
          <div className="menuOptions">

          <br />
          <br />
          <Menu
            theme={theme}
            onClick={onClick}
            style={{
              width: 256,
            }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
          </div>  
        
           <div className="cardIndoUserInformation">
          <Card
                className="cardInfoUser"
                style={{ width: 300 , height: 400}}
                cover={
                    <img
                        style={{ width: 300 , height: 330}}
                        alt="Among Us"
                        src={!user.picture ? null : user.picture}
                    />
                }
            >
            <Meta
                title="Felipe Blaksley"
                description="Texto a modo de ejemplo porque no se que 
                carajo poner porque ya estoy re quemado"
                />
                <br></br>
            </Card>

            <Descriptions className="infoUserDetail" title="Information">
            <Descriptions.Item className="infoUserDetail" label="UserName">
              @dylan.sebastian
            </Descriptions.Item>
            <Descriptions.Item className="infoUserDetail" label="Telephone">1122533256</Descriptions.Item>
            <Descriptions.Item className="infoUserDetail" label="Email">dylan.sebastianmte@gmail.com</Descriptions.Item>
            <Descriptions.Item className="infoUserDetail" label="User Status">Admin</Descriptions.Item>
            </Descriptions>
            </div> 

          
{/*             */}
          

       
    </div>  

  );

};

export default UserInfo;



{/* <div className="profile-body">

<Card
  hoverable
  style={{ width: 300, height: 500 }}
  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
>

  <h1>Felipe Blaksley</h1>

</Card>

<div className="profile-text">

  <h3>Date of birth: <h5 className="text-data-profile">22/05/1992</h5></h3>
  <br></br>
  <h3>Nacionality: <h5 className="text-data-profile">Argentina</h5></h3>
  <br></br>
  <h3>Mobile: <h5 className="text-data-profile">112-458-6710</h5></h3>
  <br></br>
  <h3>Social Networks: <h5 className="text-data-profile">Linkedin, Instagram</h5></h3>
  <br></br>
  <h3>Favorites: <h5 className="text-data-profile">God of War, Age of Empires</h5></h3>
  <br></br>
  <h3>email: <h5 className="text-data-profile">felipe.blaksley@hotmail.com</h5></h3>

</div>

</div> */}