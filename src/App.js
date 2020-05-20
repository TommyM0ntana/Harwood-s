import React from 'react'
import HomePage from './pages/homepage/HomePage'
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'
import Shop from './components/shop/Shop'
import Header from './components/header/Header'
import SignupPage from './pages/signup-page/SignupPage'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignupPage} />
      </Switch>
    </div>
  );
}

export default App;
