import React, { Component } from 'react'
import { Form, Input, Button, Select, DatePicker } from 'antd'
const { Option } = Select

class AddForm extends Component {
  formRef = React.createRef()
  constructor(props) {
    super(props)
    this.state = {}
    this.onFinish = this.onFinish.bind(this)
    this.onFinishFailed = this.onFinishFailed.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  onFinish(values) {
    console.log('Success:', values)
    this.props.addData(values)
  }

  onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo)
  }

  onReset = () => {
    this.formRef.current.resetFields()
  }

  render() {
    const layout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    }

    const tailLayout = {
      wrapperCol: { offset: 5, span: 19 }
    }

    return (
      <div style={{ width: '400px', margin: '0 auto' }}>
        <Form {...layout} ref={this.formRef} name="basic" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
          <Form.Item label="姓名" name="name" rules={[{ required: true, message: '请输入姓名' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="年龄" name="age" rules={[{ required: true, message: '请输入年龄' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="职位" name="title" rules={[{ required: true, message: '请选择职位' }]}>
            <Select>
              <Option value="前端">前端</Option>
              <Option value="后端">后端</Option>
              <Option value="测试">测试</Option>
            </Select>
          </Form.Item>

          <Form.Item label="入职时间" name="joinTime" rules={[{ required: true, message: '请选择入职时间' }]}>
            <DatePicker placeholder="请选择时间" style={{ width: '316px' }} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className="mr">Submit</Button>
            <Button type="primary" htmlType="button" className="mr" onClick={this.onReset}>reset</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default AddForm
