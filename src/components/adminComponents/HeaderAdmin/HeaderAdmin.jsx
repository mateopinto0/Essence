import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import "./HeaderAdmin.css"

export const HeaderAdmin = () => {
   const {logout} = useAuth();
   const navigate = useNavigate();
       
       const handleLogout = () =>{
           logout();
       }

       const handleVolverTienda = () => {
            const confirmar = window.confirm("Al volver a la tienda se cerrara la sesion ¿Estas seguro que deseas volver?")
            if(!confirmar)return;

            logout();
            navigate("/")
        }
   
    return(
        <header className="d-flex header justify-content-between align-items-center align-baseline  p-2 efecto-vidrio">
            <h4 className="text-center p-1 fw-medium">Panel de administracion</h4>
            <div className="d-flex align-items-center gap-1">
            <button className="btn btn-dark btn-sm" onClick={handleVolverTienda}>Volver a la tienda</button>
             <button className="btn btn-danger btn-sm" onClick={handleLogout}>Cerrar sesion</button>
            </div>
        </header>
    )
}