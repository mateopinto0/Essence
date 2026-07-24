import { Link } from "react-router-dom"
import { BotonCarrito } from "../BotonCarrito/BotonCarrito"
import { Item } from "../Item/Item"
import "./ItemList.css"

export const ItemList = ({ items }) => {
    
    const productosDestacados = items.slice(0, 4);

    return (
        <div className="container py-4" id="seccion-productos">
            
            
            {productosDestacados.length > 0 && (
                <div className="mb-5">
                    <div className="text-center mb-4">
                        <span className="badge-premium d-inline-block mb-2">Destacados</span>
                        <h3 className="text-principal fw-bold">Nuestras Fragancias Más Elegidas</h3>
                    </div>

                    <div id="perfumesCarousel" className="carousel slide shadow-sm rounded-custom overflow-hidden bg-white border-custom" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {productosDestacados.map((item, index) => (
                                <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="4000">
                                    <div className="row g-0 align-items-center p-4 p-md-5">
                                        
                                    
                                        <div className="col-12 col-md-5 text-center mb-3 mb-md-0">
                                            <img 
                                                src={item.imagenUrl} 
                                                alt={item.nombre} 
                                                className="img-fluid rounded-custom" 
                                                style={{ maxHeight: '280px', objectFit: 'contain' }}
                                            />
                                        </div>

                                       
                                        <div className="col-12 col-md-7 ps-md-5 text-center text-md-start">
                                            <h4 className="text-principal fw-bold mb-2">{item.nombre}</h4>
                                            <p className="precio mb-2">${item.precio}</p>
                                            <p className="descripcion mb-4">{item.descripcion}</p>
                                            
                                            <div className="d-flex justify-content-center justify-content-md-start gap-2">
                                                <Link to={`/detalle/${item.id}`} className="btn-acento text-decoration-none">
                                                    Ver Detalles
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        
                        <button className="carousel-control-prev" type="button" data-bs-target="#perfumesCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon p-3 rounded-circle" style={{ backgroundColor: 'var(--color-acento)' }} aria-hidden="true"></span>
                            <span className="visually-hidden">Anterior</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#perfumesCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon p-3 rounded-circle" style={{ backgroundColor: 'var(--color-acento)' }} aria-hidden="true"></span>
                            <span className="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                </div>
            )}

           
            <div className="mt-5 pt-3">
                <h2 className="text-center fw-bold text-principal mb-4">Catálogo Completo</h2>
                
                <div className="d-flex flex-wrap gap-4 justify-content-center align-items-stretch">
                    {items.map((item) => (
                        <Item key={item.id} {...item}>
                            <div className="d-flex flex-column gap-2 mt-3">
                                <Link to={`/detalle/${item.id}`} className="btn-outline-oro text-decoration-none text-center py-2">
                                    Ver más
                                </Link>
                                <BotonCarrito product={item} maxStock={item.stock} />
                            </div>
                        </Item>
                    ))}
                </div>
            </div>

        </div>
    );
};