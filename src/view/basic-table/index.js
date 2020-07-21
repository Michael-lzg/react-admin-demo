import React, { Component } from 'react'
import { Input, Select, DatePicker, Button, Table, Tag, Modal } from 'antd'
import AddForm from './addForm'
const { Option } = Select

class BasicTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      title: '',
      date: '',
      list: [],
      tableHeight: 0,
      loading: true,
      addPerson: false
    }
    this.changeTitle = this.changeTitle.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changeDate = this.changeDate.bind(this)
    this.toSearch = this.toSearch.bind(this)
    this.toAdd = this.toAdd.bind(this)
  }

  changeName(e) {
    e.persist()
    console.log(e)
    this.setState({
      name: e.target.value
    })
  }
  changeTitle(val) {
    console.log(val)
    this.setState({
      title: val
    })
  }
  changeDate(val, str) {
    console.log(val)
    console.log(str)
    this.setState({
      date: str
    })
  }
  toSearch() {
    console.log(this.state)
    this.getList()
  }
  delData(index) {
    let that = this
    Modal.confirm({
      title: '温馨提示',
      content: '是否要删除这一行？',
      centered: true,
      onOk: () => {
        let list = that.state.list
        list.splice(index, 1)
        this.setState({
          list: list
        })
        console.log(this.state)
      }
    })
  }

  resizeFun() {
    let h = window.innerHeight - document.getElementById('table').offsetTop - 160
    document.getElementById('innerTable').style.height = h + 'px'
    this.setState({
      tableHeight: h
    })
  }

  componentDidMount() {
    this.resizeFun()
  }

  UNSAFE_componentWillMount() {
    this.getList()
  }

  getList() {
    this.setState({
      loading: true
    })
    let list = []
    let arr = ['工人', '工程师', '经理', '文员']
    for (var i = 0; i < 10; i++) {
      list.push({
        id: i + 1,
        name: '张三',
        age: Math.ceil(Math.random() * 100),
        title: arr[Math.floor(Math.random() * 4)],
        joinTime: '2015-12-21'
      })
    }
    setTimeout(() => {
      this.setState({
        list: list,
        loading: false
      })
    }, 500)
  }

  toAdd() {
    this.setState({
      addPerson: true
    })
  }

  onRef = ref => {
    this.Child = ref
  }

  handleOk = () => {
    console.log(99)
    this.Child.onFinish()
  }

  handleCancel() {
    this.setState({
      addPerson: false
    })
  }

  addData(values) {
    console.log(values)
    this.handleCancel()
    let list = this.state.list
    list.push(values)
    this.setState({
      list: list
    })
  }


  render() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age
      },
      {
        title: '职位',
        dataIndex: 'title',
        key: 'title'
      },
      {
        title: '入职时间',
        dataIndex: 'joinTime',
        key: 'joinTime'
      },
      {
        title: '编辑',
        key: 'id',
        dataIndex: 'id',
        width: '15%',
        render: val => (
          <span>
            <Tag color="red" style={{ marginRight: '10px' }} onClick={this.delData.bind(this, val - 1)}>
              删除
            </Tag>
            <Tag color="blue" onClick={this.toAdd}>
              编辑
            </Tag>
          </span>
        )
      }
    ]
    return (
      <div id="table">
        <div className="topBar" style={{ height: '50px' }}>
          <div className="item fl" style={{ paddingRight: '20px' }}>
            <span>姓名 : </span>
            {<Input placeholder="请输入名称" style={{ width: '160px' }} value={this.state.name} onChange={this.changeName} />}
          </div>
          <div className="item fl" style={{ paddingRight: '20px' }}>
            <span>职位 : </span>
            <Select style={{ width: '160px' }} onChange={this.changeTitle}>
              <Option value="前端">前端</Option>
              <Option value="后端">后端</Option>
              <Option value="测试">测试</Option>
            </Select>
          </div>
          <div className="item fl" style={{ paddingRight: '20px' }}>
            <span>入职时间 : </span>
            <DatePicker placeholder="请选择时间" onChange={this.changeDate} />
          </div>
          <div className="item fl" style={{ paddingRight: '20px' }}>
            <Button type="primary" onClick={this.toSearch}>搜索</Button>
          </div>
          <div className="item fl" style={{ paddingRight: '20px' }}>
            <Button type="primary" onClick={this.toAdd}>新增</Button>
          </div>
        </div>
        <Table dataSource={this.state.list} columns={columns} rowKey="id" id="innerTable" loading={this.state.loading} />

        <Modal title="新增信息" visible={this.state.addPerson} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)} footer={null}>
          <AddForm onRef={this.onRef} addData={this.addData.bind(this)} />
        </Modal>
      </div>
    )
  }
}

export default BasicTable
