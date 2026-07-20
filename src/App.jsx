import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Item } from './components/Item/Item'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Header } from './components/Header/Header'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>

    
      <main>
      <Routes>
          <Route path='/' element={<ItemListContainer></ItemListContainer>} />
          <Route path='/carrito' element={<h1>Carrito</h1>} />
      </Routes>
      </main>
    
    </>
  )
}

export default App
