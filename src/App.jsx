import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Home, Login } from '@components/compIndex'
import './App.css'
import PublicRoute from '@utils/PublicRoute'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
