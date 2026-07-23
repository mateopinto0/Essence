import { Link } from "react-router-dom";
import { ItemList } from "../../ItemList/ItemList";
import { ProductosPedido } from "../ProductosPedido/ProductosPedido";

export const DetallePedido = ({ pedido,id }) => {
    return (
        <div className="container h-auto p-3">
            
            <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3 flex-wrap">
                <h2 className="mb-0">
                    Detalle del Pedido <span className="text-primary">#{id}</span>
                </h2>
                <span className="badge bg-dark text-white fs-6 py-2 px-3">
                    Estado: {pedido.estado}
                </span>
            </div>

            <div className="row">
            
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm mb-4">
                        <div className="card-header bg-dark text-white">
                            <h5 className="mb-0">Datos del Comprador</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <strong>Nombre:</strong> {pedido.comprador.nombre}
                            </li>
                            <li className="list-group-item">
                                <strong>Dirección:</strong> {pedido.comprador.direccion}
                            </li>
                            <li className="list-group-item">
                                <strong>Teléfono:</strong> {pedido.comprador.telefono}
                            </li>
                        </ul>
                    </div>

                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h6 className="text-muted mb-2">Fecha de creación</h6>
                            <p className="mb-0 fw-bold">{pedido.fechaCreacion}</p>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: Lista de Productos y Total */}
                <div className="col-md-8">
                    <div className="card shadow-sm">
                        <div className="card-header bg-dark text-white">
                            <h5 className="mb-0">Productos</h5>
                        </div>
                        <div className="card-body">
                            {/* Tu componente ItemList se renderiza aquí */}
                            <ProductosPedido items={pedido.items}></ProductosPedido>
                        </div>
                        <div className="card-footer text-end bg-light py-3">
                            <h4 className="mb-0">
                                Monto Total: <span className="text-success">${pedido.montoTotal}</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={"/admin/dashboard"} className="btn btn-danger mt-5">Volver</Link>
        </div>
    );
};