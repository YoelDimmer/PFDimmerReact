import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import About from './components/About'
import Contact from './components/Contact'
import {ShoppingCartContext} from './context/ShoppingCartContext'


const App = () => {
  return (
    <BrowserRouter>
    <ShoppingCartContext>
      <NavBar/>   

      <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/category/:category" element={<ItemListContainer/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />

      </Routes>

      </ShoppingCartContext>

    </BrowserRouter>

  )
}

export default App