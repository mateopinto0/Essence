import { useAuth } from "../../../context/AuthContext";

export const HeaderAdmin = () => {
   const {logout} = useAuth();
       
       const handleLogout = () =>{
           logout();
       }
   
    return(
        <header className="d-flex justify-content-between align-items-center w-100 p-2">
            <h2>Dashboard</h2>
             <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesion</button>
        </header>
    )
}