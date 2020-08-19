import React, { Component } from 'react'
import { articalList } from '../data/articalList'
import { Tag } from 'antd';
import '../css/articalList.scss'

class ArticalList extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render () {
    return (
      <div className="list">
        {articalList.map((item, index) => {
          return (
            <div className="listItem" key={index}>
              <div className="title">{item.title}</div>
              <div className="tag">
                {item.tag.map((v, k) => {
                  return (
                    <Tag color="blue" key={k}>{v}</Tag>
                  )
                })}
              </div>
              <div className="content">{item.content}</div>
            </div>
          )
        })
        }
      </div>
    )
  }
}

export default ArticalList
