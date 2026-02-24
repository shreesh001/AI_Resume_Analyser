import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './component/Sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard'
import Admin from './component/Admin/Admin'
import History from './component/History/History'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
    </div>
  )
}

export default App
