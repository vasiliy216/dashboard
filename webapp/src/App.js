import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

import { Home, Auth } from './pages'

import './scss/style.scss'

const App = props => {

  const { isAuth } = props;

  return (
    <Routes>
      <Route exact path="/account/*" element={<Auth />}/>
      <Route path="/*" element={ isAuth ? <Home /> : <Navigate replace to="/account/login" /> }/>
    </Routes>
  )
}

export default connect(({ user }) => ({isAuth: user.is_auth}))(App);