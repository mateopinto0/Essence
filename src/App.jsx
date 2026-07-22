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
import { PublicLayout } from './layouts/PublicLayout'
import { Login } from './components/Login/Login'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { AdminLayout } from './layouts/AdminLayout'
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<ItemListContainer></ItemListContainer>} />
          <Route path='/carrito' element={<Cart></Cart>} />
        <Route path='/detalle/:id' element={<ItemDetailContainer />} />
        <Route path='/pedidoExitoso' element={<CompraExitosa></CompraExitosa>} />
        </Route>

        <Route path='/login' element={<Login></Login>}/>

        <Route path='/admin' element={<ProtectedRoute><AdminLayout></AdminLayout></ProtectedRoute>}>
            <Route path='dashboard' element={<Dashboard></Dashboard>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
