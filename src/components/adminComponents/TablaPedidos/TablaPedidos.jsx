import { useState } from "react";
import { Link } from "react-router-dom"

const ITEMS_PER_PAGE = 5;

export const TablaPedidos = ({pedidos,handleRemovePedido,onCambiarEstado,busqueda,setBusqueda}) => {
    

  const [currentPage, setCurrentPage] = useState(0);
  const handleBusqueda = (e) => {
        setBusqueda(e.target.value);
        setCurrentPage(0);
    }

     const offset = currentPage * ITEMS_PER_PAGE;
    const currentData = pedidos.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(pedidos.length / ITEMS_PER_PAGE);
    return(
       <div className="container-fluid d-flex flex-column align-items-center gap-4 py-4">
            
            <div className="w-75">
                <input
                    className="form-control shadow-sm"
                    type="text"
                    placeholder="Buscar por estado..."
                    value={busqueda}
                    onChange={handleBusqueda}
                />
            </div>

            <div className="table-responsive shadow-sm rounded w-100">
                <table className="table table-striped table-hover table-bordered mb-0 text-center align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Monto Total</th>
                            <th>Estado</th>
                            <th>Fecha de creación</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentData.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center text-muted py-4">
                                    No hay pedidos que coincidan con la búsqueda.
                                </td>
                            </tr>
                        ) : (
                          
                            currentData.map((pedido) => (
                                <tr key={pedido.id}>
                                    <td className="text-muted fw-bold">{pedido.id}</td>
                                    <td>${pedido.montoTotal}</td>
                                    <td>
                                        <select 
                                            value={pedido.estado} 
                                            className={`form-select form-select-sm fw-bold mx-auto w-auto ${
                                                pedido.estado === 'cancelado' ? 'text-danger' : 
                                                pedido.estado === 'pagado' ? 'text-primary':
                                                pedido.estado === 'entregado' ? 'text-success' : 'text-secondary'
                                            }`} 
                                            onChange={(e) => onCambiarEstado(pedido.id, e.target.value)}
                                        >
                                            <option value="pendiente_pago">Pago Pendiente</option>
                                            <option value="pagado">Pagado</option>
                                            <option value="entregado">Entregado</option>
                                            <option value="cancelado">Cancelado</option>
                                        </select>
                                    </td>
                                    <td>{new Date(pedido.fechaCreacion.seconds * 1000).toLocaleDateString()}</td>
                                    <td className="d-flex gap-1 align-items-center">
                                        <Link to={`/admin/pedidos/${pedido.id}`} className="btn btn-dark btn-sm">
                                            Ver detalle
                                        </Link>
                                        <button className="btn btn-danger" onClick={()=>handleRemovePedido(pedido.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            
            {pageCount > 1 && (
                <div className="d-flex justify-content-center gap-1 mt-2">
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => setCurrentPage(p => p - 1)}
                        disabled={currentPage === 0}
                    >
                        &larr; Anterior
                    </button>

                    {Array.from({ length: pageCount }, (_, i) => (
                        <button
                            key={i}
                            className={`btn ${currentPage === i ? "btn-dark" : "btn-outline-dark"}`}
                            onClick={() => setCurrentPage(i)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        className="btn btn-outline-dark"
                        onClick={() => setCurrentPage(p => p + 1)}
                        disabled={currentPage === pageCount - 1}
                    >
                        Siguiente &rarr;
                    </button>
                </div>
            )}
        </div>
    )
}