export const TablaPedidos = ({pedidos}) => {
    return(
        <div className="table-responsive shadow-sm rounded d-flex align-items-center justify-content-center"> 
            <table className="table table-striped table-hover table-bordered mb-0 w-75">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Monto Total</th>
                        <th>Estado</th>
                        <th>Fecha de creacion</th>
                    </tr>
                </thead>

                <tbody>
                    {pedidos.length === 0 ? (
                        <tr>
                            
                            <td colSpan={6} className="text-center text-muted py-4">
                                No hay productos.
                            </td>
                        </tr>
                    ) : (
                        pedidos.map((pedido) => (
                            <tr key={pedido.id}>
                                <td>{pedido.id}</td>
                                <td>{pedido.montoTotal}</td>
                                <td>{pedido.estado}</td>
                                <td>{new Date(pedido.fechaCreacion.seconds * 1000).toLocaleDateString()}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}