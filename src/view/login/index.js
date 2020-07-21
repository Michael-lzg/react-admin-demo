import React, { Component } from 'react'
import { withRouter } from 'react-router';
import '../../css/login.css'
import { Form, Input, Button } from 'antd'
import { UserOutlined, CompassOutlined } from '@ant-design/icons'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onFinish = this.onFinish.bind(this)
    this.onFinishFailed = this.onFinishFailed.bind(this)
  }

  onFinish (values) {
    this.props.history.push('/admin/basic/table')
  }

  onFinishFailed (errorInfo) {
    console.log('Failed:', errorInfo)
  }

  render () {
    const layout = {
      labelCol: { span: 0 },
      wrapperCol: { span: 24 }
    }

    const tailLayout = {
      wrapperCol: { offset: 0, span: 24 }
    }
    return (
      <div className="loginPage">
        <div className="box">
          <div className="top">系统登录</div>
          <Form {...layout} ref={this.formRef} name="basic" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
              <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
              <Input.Password prefix={<CompassOutlined />} placeholder="请输入密码" />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" size="large" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)  
