import { Link } from "react-router-dom";

export const FormProducto = ({ product, onChange, onSubmit, onFile }) => {
    return (<>      
    <div className="d-flex align-items-center">  
    <Link to={'/admin/dashboard'} className="btn btn-danger p-1 ms-4 mt-4">Volver</Link>
     </div>   
        <div className="container ">
            
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6" >
                    <div className="card shadow-sm">
                        <div className="card-body p-4">
                            <h4 className="card-title text-center mb-4">Agregar Producto</h4>
                            
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nombre</label>
                                    <input type="text" className="form-control" name="nombre" value={product.nombre} onChange={onChange} placeholder="Ej: Zapatillas" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Descripción</label>
                                    <input type="text" className="form-control" name="descripcion" value={product.descripcion} onChange={onChange} />
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="form-label fw-bold">Marca</label>
                                        <input type="text" className="form-control" name="marca" value={product.marca} onChange={onChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold">Tipo</label>
                                        <input type="text" className="form-control" name="tipo" value={product.tipo} onChange={onChange} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="form-label fw-bold">Precio</label>
                                        <div className="input-group">
                                            <span className="input-group-text">$</span>
                                            <input type="number" className="form-control" name="precio" value={product.precio} onChange={onChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold">Cantidad (Stock)</label>
                                        <input type="number" className="form-control" name="stock" value={product.stock} onChange={onChange} />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-bold">Imagen del producto</label>
                                    <input type="file" className="form-control" accept="image/*" onChange={onFile} />
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn-acento btn-lg">
                                        Agregar Producto
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};