import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

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
        <header className="d-flex justify-content-between align-items-center w-100 p-2">
            <h2>Dashboard</h2>
            <div className="d-flex align-items-center gap-1">
            <button className="btn btn-dark" onClick={handleVolverTienda}>Volver a la tienda</button>
             <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesion</button>
            </div>
        </header>
    )
}