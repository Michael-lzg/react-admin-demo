import React from 'react'
import { Route, Switch } from 'react-router-dom'
import asyncComponent from '../compoents/AsyncComponent'

const routes = [
  {
    path: '/admin/index/index',
    component: asyncComponent(()=>import('../view/index/index.js'))
  },
  {
    path: '/admin/basic/form',
    component: asyncComponent(()=>import('../view/basic-form/index.js'))
  },
  {
    path: '/admin/basic/table',
    component: asyncComponent(()=>import('../view/basic-table/index.js'))
  },
  {
    path: '/admin/basic/upload',
    component: asyncComponent(()=>import('../view/basic-upload/index.js'))
  }
]

class ContentMain extends React.Component {
  render() {
    return (
      // <BrowserRouter>
        <Switch>
          {routes.map((item, index) => {
            return <Route exact path={item.path} component={item.component} key={index} />
          })}
        </Switch>
      // </BrowserRouter>
    )
  }
}

export default ContentMain
