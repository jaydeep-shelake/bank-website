import React from 'react'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/emi-calculator' element={<Calculator/>}/>
      </Routes>
    </Router>
  )
}

export default App