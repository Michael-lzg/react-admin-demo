import React from 'react'
import CustomMenu from "./CustomMenu";

const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/admin/index/index'
  },
  {
    title: '基本组件',
    icon: 'laptop',
    key: '/admin/basic',
    subs: [
      {key: '/admin/basic/form', title: '基础表单', icon: '',},
      {key: '/admin/basic/table', title: '表格数据', icon: '',},
      {key: '/admin/basic/upload', title: '文件上传', icon: '',},
    ]
  },
  {
    title: '显示组件',
    icon: 'desktop',
    key: '/admin/display',
    subs: [
      {key: '/admin/modal', title: '对话框', icon: ''},
      {key: '/admin/notice', title: '消息提醒', icon: ''},
      {key: '/admin/spin', title: '数据加载', icon: ''},
    ]
  },
  {
    title: '其它',
    icon: 'bulb',
    key: '/admin/other',
    subs:[
      {key:'/admin/editor',title:'富文本',icon:''},
      {key:'/admin/echart',title:'图表展示',icon:''},
      {key:'/admin/loading',title:'加载动画',icon:''}
    ]
  }
]


class SiderNav extends React.Component {
  render() {
    return (
      <div style={{height: '100%',overflowY:'scroll'}}>
        <div style={styles.logo}></div>
        <CustomMenu menus={menus}/>
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav