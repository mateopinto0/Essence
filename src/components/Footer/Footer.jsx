import "./Footer.css"

export const Footer = () =>{
    return(
         
        <footer className="footer bg-blush-suave text-principal" id="saber-mas">
            <div className="footer-container">
                <div className="footer-col">
                    <p className="footer-marca">Essence</p>
                    <p className="footer-descripcion">
                        Perfumes y cremas hechos con ingredientes botánicos.
                    </p>
                </div>

                <div className="footer-col">
                    <p className="footer-titulo">Tienda</p>
                    <a href="/perfumes" className="footer-link">Perfumes</a>
                    <a href="/cremas" className="footer-link">Cremas</a>
                    <a href="/sets" className="footer-link">Sets de regalo</a>
                </div>

                <div className="footer-col">
                    <p className="footer-titulo">Ayuda</p>
                    <a href="/envios" className="footer-link">Envíos</a>
                    <a href="/cambios" className="footer-link">Cambios y devoluciones</a>
                    <a href="/contacto" className="footer-link">Contacto</a>
                </div>

                <div className="footer-col">
                    <p className="footer-titulo">Seguinos</p>
                    <div className="footer-redes">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://wa.me/5491163306976" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                            <i className="bi bi-whatsapp"></i>
                        </a>
                        <a href="mailto:hola@essence.com" aria-label="Email">
                            <i className="bi bi-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Essence. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}