import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { User } from './pages/User'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/user/:id' element={<User />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
