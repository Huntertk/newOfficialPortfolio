import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
    <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<h1>Profile</h1>} />
          <Route path='/projects' element={<h1>Projects</h1>} />
          <Route path='/contact' element={<h1>Contact</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
