import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './colores.css'
import './App.css'
import { Item } from './components/Item/Item'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Header } from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Cart } from './components/Cart/Cart'
import { Footer } from './components/Footer/Footer'
import { CompraExitosa } from './components/CompraExitosa/CompraExitosa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>

    
      <main>
      <Routes>
          <Route path='/' element={<ItemListContainer></ItemListContainer>} />
          <Route path='/carrito' element={<Cart></Cart>} />
        <Route path='/detalle/:id' element={<ItemDetailContainer />} />
        <Route path='/pedidoExitoso' element={<CompraExitosa></CompraExitosa>}></Route>
      </Routes>
      </main>
    <Footer></Footer>
    </>
  )
}

export default App
