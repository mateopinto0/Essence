import { useEffect, useState } from "react"
import { getItems } from "../../../service/ProductoService";
import { Spinner } from "../../Spinner/Spinner";
import { TablaProductos } from "../TablaProductos/TablaProductos";

export const TablaProductosContainer = () => {
    const [items,setItems]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
            getItems().then((data)=> setItems(data)).then(setLoading(false)).catch((err)=>console.log(err))
       },[])

    if(loading){
        return <Spinner></Spinner>
    }   

    return(<div className="m-5">
        <h3 className="text-center">Lista de productos</h3>
        <TablaProductos items={items}></TablaProductos>
        </div>
    )
}