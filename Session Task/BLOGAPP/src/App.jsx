import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Create from './components/Create'
import Edit from './components/Edit'
import Home from './components/Home'
import TopBar from './components/TopBar'
export const API_URL = 'https://6545d30cfe036a2fa954d5ea.mockapi.io/Blog'

function App() {
  return <>
      <div> 
        <BrowserRouter>
        <TopBar/>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/top-bar' element={<TopBar/>}/>
            <Route path='/*' element={<Navigate to='/'/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  </>
  
}

export default App