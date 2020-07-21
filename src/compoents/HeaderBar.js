import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

// @withRouter
class HeaderBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }
  toggle () {
    this.props.toggle()
  }

  clickMenu ({ key }) {
    if (key === '3') {
      this.props.history.push('/login')
    }
  }


  render () {

    const menu = (
      <Menu onClick={this.clickMenu.bind(this)}>
        <Menu.Item key="1">我的掘金</Menu.Item>
        <Menu.Item key="2">我的github</Menu.Item>
        <Menu.Item key="3">退出登录</Menu.Item>
      </Menu>
    )

    return (
      <div className="header" style={{ paddingRight: '20px' }}>
        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: this.toggle.bind(this),
        })}
        <div className="fr">
          <Dropdown overlay={menu}>
            <div style={{ cursor: 'pointer' }}>
              <img src={require('../img/admin.jpg')} alt="" width="30" className="br50" />
              admin <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default withRouter(HeaderBar) 