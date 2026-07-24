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
    <div className="w-100 px-md-3">
    <h4 className="text-principal mb-4 text-center">Tus Datos de Envío</h4>
    
 
    <div className="mb-3 text-start">
        <label className="form-label text-secundario fw-bold small mb-1">Nombre y Apellido</label>
        <input 
            type="text" 
            name="nombre" 
            placeholder="Ej: Ana Pérez" 
            value={datosComprador.nombre} 
            onChange={handleChange} 
            className="form-control input-custom"
        />
    </div>

   
    <div className="mb-3 text-start">
        <label className="form-label text-secundario fw-bold small mb-1">Teléfono (WhatsApp)</label>
        <input 
            type="tel" 
            name="telefono" 
            placeholder="Ej: +54 11 1234 5678" 
            value={datosComprador.telefono} 
            onChange={handleChange} 
            className="form-control input-custom"
        />
    </div>

  
    <div className="mb-4 text-start">
        <label className="form-label text-secundario fw-bold small mb-1">Dirección de envío</label>
        <input 
            type="text" 
            name="direccion" 
            placeholder="Ej: Av. Rivadavia 1234, Depto 2" 
            value={datosComprador.direccion} 
            onChange={handleChange} 
            className="form-control input-custom"
        />
    </div>

  
    <div className="d-grid mt-2">
        <BotonFinalizarCompra 
            datosComprador={datosComprador} 
            onSuccess={(datos) => onPedidoExitoso(datos)}
        />
    </div>
</div>
  );
}