import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Profile from './pages/Profile'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
    <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
