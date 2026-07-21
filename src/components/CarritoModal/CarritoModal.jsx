import { useState } from "react"
import { BotonFinalizarCompra } from "../BotonFinalizarCompra/BotonFinalizarCompra"
import { CompraExitosa } from "../CompraExitosa/CompraExitosa";

export const CarritoModal = ({onPedidoExitoso}) => {
    const [datosComprador, setDatosComprador] = useState({
        nombre: "",
        telefono: "",
        direccion: ""
    })

    const handleChange = (e) => {
        setDatosComprador({
            ...datosComprador,
            [e.target.name] : e.target.value
        })
    
    }

    return (
    <div className="d-flex justify-content-center align-items-center flex-column gap-2 ">
      <h3>Tus Datos de Envío</h3>
      <input 
        type="text" 
        name="nombre" 
        placeholder="Nombre y Apellido" 
        value={datosComprador.nombre} 
        onChange={handleChange} 
        className="w-100"
      />
      <input 
        type="tel" 
        name="telefono" 
        placeholder="Teléfono (WhatsApp)" 
        value={datosComprador.telefono} 
        onChange={handleChange} 
        className="w-100"
      />
      <input 
        type="text" 
        name="direccion" 
        placeholder="Dirección de envío" 
        value={datosComprador.direccion} 
        onChange={handleChange} className="w-100"
      />

      
      <BotonFinalizarCompra datosComprador={datosComprador} onSuccess={(datos)=>onPedidoExitoso(datos)}/>
    </div>
  );
}