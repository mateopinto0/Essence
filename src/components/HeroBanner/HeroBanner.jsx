import { Link } from "react-router-dom";
import "./HeroBanner.css"

export const HeroBanner = () => {
    return (
        <div className="hero-container mb-5">
            {/* Capa superpuesta para asegurar que el texto se lea sin importar la imagen */}
            <div className="hero-overlay d-flex flex-column justify-content-center align-items-center px-3">
                
                {/* Tarjeta central con el efecto vidrio */}
                <div className="efecto-vidrio p-4 p-md-5 text-center shadow-lg" style={{ maxWidth: '650px' }}>
                    
                    <span className="badge-premium d-inline-block mb-3">Nueva Colección</span>
                    
                    <h1 className="text-principal fw-bold mb-3 display-5">
                        El poder de la naturaleza en tu piel
                    </h1>
                    
                    <p className="text-secundario fs-5 mb-4">
                        Descubre nuestra línea de cuidado botánico. Fórmulas limpias, libres de crueldad y con resultados reales.
                    </p>
                    
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <a href="#seccion-productos" className="btn-acento px-4 py-2 fs-5 text-decoration-none" >
                            Ver Productos
                        </a>
                        <Link to={"/nuestra-historia"} className="btn-outline-oro px-4 py-2 fs-5 bg-white text-decoration-none">
                            Saber más
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
}