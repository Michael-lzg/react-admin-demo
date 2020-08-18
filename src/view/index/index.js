import React, { Component } from 'react'
import '../../css/index.scss'
import { Tag, Progress } from 'antd';

class AdminIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render () {
    const netList = [
      { name: 'vue', icon: require('../../img/icon/vue.png') },
      { name: 'react', icon: require('../../img/icon/react.png') },
      { name: 'webpack', icon: require('../../img/icon/webpack.png') },
      { name: 'html', icon: require('../../img/icon/html.png') },
      { name: '掘金', icon: require('../../img/icon/juejin.png') },
      { name: '知乎', icon: require('../../img/icon/zhihu.png') },
      { name: 'segmentfault', icon: require('../../img/icon/segmentfault.png') },
      { name: 'CSDN', icon: require('../../img/icon/CSDN.png') }
    ]
    return (
      <div className="mainPage">
        <div className="left-block">
          <div className="left-top-block">
            <div className="img">
              <img src={require('../../img/admin.jpg')} alt="" width="120" />
            </div>
            <div className="info">
              <div className="name">lzg</div>
              <div className="job c8">天道酬勤，自强不息</div>
              <div className="tag">
                <Tag color="blue">很有想法的</Tag>
                <Tag color="blue">专注前端</Tag>
                <Tag color="blue">not only 切图仔</Tag>
              </div>
            </div>
          </div>

          <div className="left-mid-block">
            <div className="title">技术技能</div>
            Vue
            <Progress percent={90} />
            React
            <Progress percent={85} strokeColor="#42b983" />
            Webpack
            <Progress percent={85} strokeColor="#75AFCC" />
            Angular
            <Progress percent={80} strokeColor="#FAAD14" />
            小程序
            <Progress percent={75} strokeColor="#F5223C" />
          </div>

          <div className="left-bot-block">
            <div className="title">友情链接</div>
            <div className="list clearfix">
              {netList.map((item, index) => {
                return (
                  <div className="item fl" key={index}>
                    <img src={item.icon} alt="" width="20" />{item.name}
                  </div>
                )
              })}
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default AdminIndex