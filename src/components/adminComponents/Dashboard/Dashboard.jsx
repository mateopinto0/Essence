import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"
import { HeaderAdmin } from "../HeaderAdmin/HeaderAdmin";
import { TablaPedidosContainer } from "../TablaPedidosContainer/TablaPedidosContainer";
import { TablaProductos } from "../TablaProductos/TablaProductos";
import { TablaProductosContainer } from "../TablaProductosContainer/TablaProductosContainer";

export const Dashboard = () => {
    const {logout} = useAuth();
    
    const handleLogout = () =>{
        logout();
    }

    return(
        <>
         <HeaderAdmin></HeaderAdmin>
        <div className="container h-auto w-100">
           
            <div className="d-flex align-items-center justify-content-center w-100">     
            <Link to={'/admin/agregar-producto'} className="btn-acento mt-3 text-decoration-none">Agregar Producto</Link>
            </div>
        <TablaProductosContainer></TablaProductosContainer>
        <TablaPedidosContainer></TablaPedidosContainer>
        </div>
        </>
    )
}