import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

class BasicForm extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props)
    this.state = {}
    this.onFinish = this.onFinish.bind(this)
    this.onFinishFailed = this.onFinishFailed.bind(this)
    this.onFill = this.onFill.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  onFinish (values) {
    console.log(this.formRef.current.getFieldValue('username'))
    console.log(this.formRef.current.getFieldsValue('username'))
    console.log('Success:', values)
  }

  onFinishFailed (errorInfo) {
    console.log('Failed:', errorInfo)
  }

  onFill () {
    this.formRef.current.setFieldsValue({
      username: 'admin',
      password: '123456',
      Email: '88888888qq.com',
      telephone: '188888888'
    })
  }

  onReset = () => {
    this.formRef.current.resetFields();
  };

  render () {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 }
    }

    const tailLayout = {
      wrapperCol: { offset: 4, span: 20 }
    }

    return (
      <div style={{ width: '600px' }}>
        <Form {...layout} ref={this.formRef} name="basic" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item label="E-mail" name="Email" rules={[
            { type: 'email', message: 'The input is not valid E-mail!' },
            { required: true, message: 'Please input your E-mail!' },
          ]}>
            <Input />
          </Form.Item>

          <Form.Item label="telephone" name="telephone" rules={[
            { required: true, message: 'Please input your telephone!' },
            ({ getFieldValue }) => ({
              validator (rule, value) {
                if (!(/^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/).test(value)) {
                  // return Promise.resolve();
                  return Promise.reject('请输入11位数');
                }
              },
            })
          ]}>
            <Input maxLength="11" />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className='mr'>Submit</Button>
            <Button type="primary" htmlType="button" className='mr' onClick={this.onReset}>reset</Button>
            <Button type="primary" htmlType="button" onClick={this.onFill}>Fill form</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default BasicForm
