import { useEffect, useState } from "react"
import { getItems, removeProducto } from "../../../service/ProductoService";
import { Spinner } from "../../Spinner/Spinner";
import { TablaProductos } from "../TablaProductos/TablaProductos";

export const TablaProductosContainer = () => {
    const [items,setItems]=useState([]);
    const [loading,setLoading]=useState(true);
    const[busqueda,setBusqueda]=useState("");
    
    useEffect(()=>{
        setLoading(true)
            getItems().then((data)=> setItems(data)).then(setLoading(false)).catch((err)=>console.log(err))
       },[])

       const itemsFiltrados= items.filter(item => item.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
                                item.marca.toLowerCase().includes(busqueda.toLowerCase()))
       
    
       const handleRemoveItem = async(id) => {
            const confirmar= window.confirm("¿Estas seguro que quieres eliminar el producto?")
            if(!confirmar)return

           await removeProducto(id);
           setItems((prev)=>prev.filter((item)=> item.id != id))
       }

    if(loading){
        return <Spinner></Spinner>
    }   

    return(<div className="m-2">
        <h3 className="text-center">Lista de productos</h3>
        <TablaProductos items={itemsFiltrados} busqueda={busqueda} setBusqueda={setBusqueda} handleRemoveItem={handleRemoveItem}></TablaProductos>
        </div>
    )
}