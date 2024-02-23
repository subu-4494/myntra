import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Details from './components/Details'
import Wishlist from './components/Wishlist'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
      </Routes>
    </>
  )
}

export default App