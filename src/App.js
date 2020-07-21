import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import './css/common.css'
import 'antd/dist/antd.css'
import Login from './view/login/index'
import Admin from './view/admin/index'

function App() {
  return (
    <BrowserRouter>
      {
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
        </Switch>
      }
    </BrowserRouter>
  )
}

export default App
