import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Armaduras from './Components/Armaduras'
import Armas from './Components/Armas'
import Magia from './Components/Magia'
import CartWidget from './Components/CartWidget/CartWidget'
import Error from './Components/Error'
import Cart from './Components/Cart/Cart'
import CartProvider from './Components/Context/CartContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <NavBar/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:id' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/armas' element={<Armas/>} />
        <Route path='/armaduras' element={<Armaduras/>} />
        <Route path='/magia' element={<Magia/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      </CartProvider>





    </BrowserRouter>
    </>
  )
}

export default App
