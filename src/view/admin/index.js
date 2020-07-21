import React, { Component } from 'react'
import '../../App.css'
import { Layout } from 'antd';
import ContentMain from '../../compoents/ContentMain'
import SiderNav from '../../compoents/SiderNav'
import HeaderBar from '../../compoents/HeaderBar'

const { Header, Sider, Content } = Layout;

class Admin extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render () {
    return (
      <Layout style={{ height: "100%" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          {<SiderNav />}
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: "0 20px" }}>            
            {<HeaderBar toggle={this.toggle.bind(this)} />}
          </Header>
          <Content className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {<ContentMain />}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Admin