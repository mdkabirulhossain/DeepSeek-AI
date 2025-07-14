import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Login from './component/login'
import Signup from './component/signup'

function App() {
  return (
    <div>
      
      <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/signup' element= {<Signup />} />
      </Routes>
    </div>

  )
}

export default App
