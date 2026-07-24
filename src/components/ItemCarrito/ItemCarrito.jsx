export const ItemCarrito = ({imagenUrl,nombre,precio,descripcion,children}) => {
    return (
        <div className="card mb-3 p-3 shadow-sm border-0  w-100">
            <div className="row align-items-center text-center text-md-start">
                
               
                <div className="col-12 col-md-2 mb-2 mb-md-0 d-flex justify-content-center">
                    <img 
                        src={imagenUrl} 
                        alt={nombre} 
                        className="img-fluid rounded" 
                        style={{ maxHeight: '80px', objectFit: 'contain' }} 
                    />
                </div>

                
                <div className="col-12 col-md-4 mb-2 mb-md-0">
                    <h5 className="fw-bold mb-1">{nombre}</h5>
                    <span className="text-secundario small">Precio unitario: ${precio}</span>
                </div>

                {/* 3. Controles (BotonCarrito y Eliminar) */}
                {/* Usamos el prop "children" para inyectar los botones desde el carrito */}
                <div className="col-12 col-md-6 d-flex flex-column flex-md-row align-items-center justify-content-md-end gap-3">
                    {children}
                </div>

            </div>
        </div>
    );
    
}