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
        <div className="container h-auto w-100">
            <HeaderAdmin></HeaderAdmin>
        <TablaProductosContainer></TablaProductosContainer>
        <TablaPedidosContainer></TablaPedidosContainer>
        </div>
    )
}