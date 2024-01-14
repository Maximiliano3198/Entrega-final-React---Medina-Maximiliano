import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Error from './Components/Error'
import Cart from './Components/Cart/Cart'
import CartProvider from './Components/Context/CartContext'
import CheckOut from './Components/Checkout/CheckOut'


function App() {
  return (
    <div className='bg- success'>
    <BrowserRouter>
    <CartProvider>
      <NavBar/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:id' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<CheckOut/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      </CartProvider>





    </BrowserRouter>
    </div>
  )
}

export default App
