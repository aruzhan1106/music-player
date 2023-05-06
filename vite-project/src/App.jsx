import './App.css'
import React from 'react';
import logo from './assets/logo.png';
import { Layout, Menu } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import AudioPlayer from './AudioPlayer';
import { Tabs } from "antd";
import { library } from "./albumList";
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;
const { Header, Footer, Sider, Content } = Layout;

// const headerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   height: 64,
//   paddingInline: 50,
//   lineHeight: '64px',
//   backgroundColor: '#7dbcea',
//   width: '85vw'
// };

const contentStyle = {
  textAlign: 'center',
  color: '#fff',
  background: 'linear-gradient(90deg, rgba(255,180,180,1) 0%, rgba(255,193,193,1) 50%, rgba(255,219,118,1) 100%)',
  // height: '80vh',
  width: '86vw'
};

const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'white',
  // background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,238,238,1) 50%, rgba(255,255,255,1) 100%)',
  // height: '100vh',
  width: '10vw'
};

const footerStyle = {
  textAlign: 'center',
  color: '#000',
  backgroundColor: '#fff',
  //width: '100vw'
};

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const sidebarItems = [
  getItem('Home', 'sub1', <MailOutlined />),
  getItem('About us', 'sub2', <SettingOutlined />),
];

// const tabItems = [
//   getItem('New Releases', 'tab1', <MailOutlined />, 'child 1'),
//   getItem('Moods and Genres', 'tab2', <MailOutlined />, 'child 2'),
//   getItem('Featured', 'tab3', <MailOutlined />, 'child 3'),
// ];

const App = () => (
  <Layout>
    <Layout >
      <Sider style={siderStyle}>
        <img src={logo} style={{ width: 200, margin: '20px auto' }} alt="logo" />
        <Menu
          mode="vertical"
          items={sidebarItems}
        />
      </Sider>
      <Content style={contentStyle}>
        {/* <Tabs
    defaultActiveKey="1"
    centered
    items={tabItems}
  /> */}
        <h1 className="featuredTitle">Today Is The Day</h1>
        <div className="albums">
          {library.map((e) => (
            <div className="albumSelection">
              <img
                src={e.image}
                alt="bull"
                style={{ width: "150px"}}
              ></img>
              <p>{e.title}</p>
            </div>
          ))}
        </div>
      </Content>
    </Layout>
    <Footer style={footerStyle}>
      <AudioPlayer />
    </Footer>
  </Layout>
);

export default App;

