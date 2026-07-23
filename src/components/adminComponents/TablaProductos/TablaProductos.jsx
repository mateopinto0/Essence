import { useState } from "react";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 5;

export const TablaProductos = ({ items, handleRemoveItem, busqueda, setBusqueda }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleBusqueda = (e) => {
        setBusqueda(e.target.value);
        setCurrentPage(0);
    };

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentData = items.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(items.length / ITEMS_PER_PAGE);

    return (
        <div className="container-fluid d-flex flex-column align-items-center gap-4 py-4">
            
            {/* Buscador */}
            <div className="w-75">
                <input
                    className="form-control shadow-sm"
                    type="text"
                    placeholder="Buscar por nombre o marca..."
                    value={busqueda}
                    onChange={handleBusqueda}
                />
            </div>

            <div className="table-responsive shadow-sm rounded w-100">
                <table className="table table-striped table-hover table-bordered mb-0 text-center align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Marca</th>
                            <th>Precio</th>
                            <th>Tipo</th>
                            <th>Stock</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="text-center text-muted py-4">
                                    No hay productos que coincidan con la búsqueda.
                                </td>
                            </tr>
                        ) : (
                            currentData.map((item) => (
                                <tr key={item.id}>
                                    <td className="text-muted fw-bold">{item.id}</td>
                                    <td className="fw-semibold">{item.nombre}</td>
                                    <td>{item.marca}</td>
                                    <td>${item.precio}</td>
                                    
                              
                                    <td>
                                        <span className="badge bg-secondary bg-opacity-75">
                                            {item.tipo}
                                        </span>
                                    </td>
                                    
                                   
                                    <td>
                                        <span className={`badge ${
                                            item.stock > 5 ? 'bg-success' : 
                                            item.stock > 0 ? 'bg-warning text-dark' : 'bg-danger'
                                        }`}>
                                            {item.stock} u.
                                        </span>
                                    </td>

                                    <td>
                                        <div className="d-flex justify-content-center gap-2">
                                            <Link to={`/admin/editar-item/${item.id}`} className="btn btn-dark btn-sm">
                                                Editar
                                            </Link>
                                            <button 
                                                className="btn btn-danger btn-sm" 
                                                onClick={() => handleRemoveItem(item.id)}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
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
    );
};