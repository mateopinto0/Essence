import { useEffect, useState } from "react"
import { getItems } from "../../../service/ProductoService"
import { Spinner } from "../../Spinner/Spinner";
import { Link } from "react-router-dom";

export const TablaProductos = ({items,handleRemoveItem}) => {



    return (
       <div className="table-responsive shadow-sm rounded d-flex align-items-center justify-content-center"> 
            <table className="table table-striped table-hover table-bordered mb-0 w-75">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Precio</th>
                        <th>Tipo</th>
                        <th>Cantidad en stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {items.length === 0 ? (
                        <tr>
                            
                            <td colSpan={6} className="text-center text-muted py-4">
                                No hay productos.
                            </td>
                        </tr>
                    ) : (
                        items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.marca}</td>
                                <td>{item.precio}</td>
                                <td>{item.tipo}</td>
                                <td>{item.stock}</td>
                                <td className="d-flex gap-1">
                                    
                                    <Link to={`/admin/editar-item/${item.id}`} className="btn btn-dark">Editar</Link>
                                    <button className="btn btn-danger" onClick={()=>handleRemoveItem(item.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}