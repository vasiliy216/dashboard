import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/'
import Auth from '../src/pages/auth'

import './scss/style.scss'

const App = props => {
  return (
    <Routes>
      <Route exact path="/auth/*" element={<Auth />}/>
      {/* <Route exact path=""/> */}
      <Route path="/*" element={<Home />}/>
    </Routes>
  )
}

export default App