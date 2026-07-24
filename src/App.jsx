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
import { FormProductoContainer } from './components/adminComponents/FormProducto/FormProductoContainer'
import { FormEditarItemContainer } from './components/adminComponents/FormEditarItem/FormEditarItemContainer'
import { DetallePedidoContainer } from './components/adminComponents/DetallePedidoContainer/DetallePedidoContainer'
import { Tienda } from './components/Tienda/Tienda'
import { Nosotros } from './components/Nosotros/Nosotros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<Tienda></Tienda>} />
          <Route path='/carrito' element={<Cart></Cart>} />
        <Route path='/detalle/:id' element={<ItemDetailContainer />} />
        <Route path='/pedidoExitoso' element={<CompraExitosa></CompraExitosa>} />
        <Route path='/nuestra-historia' element={<Nosotros></Nosotros>}></Route>
        </Route>

        <Route path='/login' element={<Login></Login>}/>

        <Route path='/admin' element={<ProtectedRoute><AdminLayout></AdminLayout></ProtectedRoute>}>
            <Route path='dashboard' element={<Dashboard></Dashboard>}/>
            <Route path='agregar-producto' element={<FormProductoContainer></FormProductoContainer>}></Route>
            <Route path='editar-item/:id' element={<FormEditarItemContainer></FormEditarItemContainer>}></Route>
            <Route path='pedidos/:id' element={<DetallePedidoContainer></DetallePedidoContainer>}></Route>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
