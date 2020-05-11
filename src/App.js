import React from 'react'
import HomePage from './pages/homepage/HomePage'
import './App.css'
import { Route, Switch } from 'react-router-dom'


const ManPage = () => (
  <div>
    <h1>
      MANS PAGE
  </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/manpage' component={ManPage} />
      </Switch>
    </div>
  );
}

export default App;
