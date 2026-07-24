import { Link } from "react-router-dom";

export const Nosotros = () => {
    return (
        <div className="bg-fondo py-5 min-vh-100 d-flex flex-column justify-content-center">
            <div className="container py-4">
                
                <div className="row align-items-center mb-5">
                    
                   
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0 pe-lg-5">
                        <span className="badge-premium d-inline-block mb-3">Nuestra Historia</span>
                        <h1 className="text-principal fw-bold display-5 mb-4">
                            Aromas que enamoran y crean momentos inolvidables.
                        </h1>
                        <p className="text-secundario fs-6 line-height-lg mb-3">
                            ¡Hola! Qué alegría que estés por acá. Mi nombre es Noemi y detrás de cada frasco, cada esencia y cada paquete que armo, hay un trabajo hecho con muchísimo amor y dedicación.
                        </p>
                        <p className="text-secundario fs-6 line-height-lg mb-3">
                            Comencé este camino con una pasión inmensa por los aromas. Para mí, un perfume no es solo un producto: es un recuerdo, un estado de ánimo, una forma de dejar huella. Por eso, elijo personalmente cada fragancia pensando en ofrecerte la mejor calidad, durabilidad y esa atención cálida de antes.
                        </p>
                        <p className="text-secundario fs-6 line-height-lg mb-4">
                            Gracias por confiar en mi emprendimiento y dejarme ser parte de tus días a través de mis fragancias. ¡Espero que disfrutes tanto de elegir tu perfume como yo disfruto preparándolo para vos!
                        </p>
                        
                        <div className="d-flex gap-3">
                            <Link to="/" className="btn-acento text-decoration-none">
                                Ver Catálogo
                            </Link>
                        </div>
                    </div>

                
                    <div className="col-12 col-lg-6">
                        <div className="position-relative">
                            <img 
                                src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop" 
                                alt="Perfumes artesanales" 
                                className="img-fluid rounded-custom shadow-sm w-100"
                                style={{ maxHeight: '450px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>

               
                <div className="row mt-5 pt-4 text-center">
                    <div className="col-12 mb-4">
                        <h3 className="text-principal fw-bold">Por qué elegirnos</h3>
                        <p className="text-secundario">Atención personalizada y confianza en cada compra.</p>
                    </div>

                    
                    <div className="col-12 col-md-4 mb-4">
                        <div className="efecto-vidrio p-4 h-100 shadow-sm border-custom">
                            <div className="text-oro fs-2 mb-3">🌸</div>
                            <h5 className="text-principal fw-bold mb-2">Calidad y Duración</h5>
                            <p className="text-secundario small mb-0">
                                Esencias seleccionadas con fijación duradera para que tu fragancia te acompañe durante todo el día.
                            </p>
                        </div>
                    </div>

                   
                    <div className="col-12 col-md-4 mb-4">
                        <div className="efecto-vidrio p-4 h-100 shadow-sm border-custom">
                            <div className="text-oro fs-2 mb-3">💬</div>
                            <h5 className="text-principal fw-bold mb-2">Asesoramiento Directo</h5>
                            <p className="text-secundario small mb-0">
                                ¿No sabés qué perfume regalarte o cuál va con tu estilo? Escribime por WhatsApp y te asesoro personalmente.
                            </p>
                        </div>
                    </div>


                    <div className="col-12 col-md-4 mb-4">
                        <div className="efecto-vidrio p-4 h-100 shadow-sm border-custom">
                            <div className="text-oro fs-2 mb-3">🎁</div>
                            <h5 className="text-principal fw-bold mb-2">Presentación para Regalo</h5>
                            <p className="text-secundario small mb-0">
                                Cada pedido se prepara con detalles especiales y cuidado, ideal para hacer un presente o darte un mimo.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}