import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { getItems } from "../../service/ProductoService";


export const ItemListContainer = () => {
    
    const[items,setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        getItems().then((data)=> setItems(data))
        .finally(()=> setLoading(false))
        .catch((error)=> console.log(error))
    },[])

    if(loading) return <p>Cargando productos...</p>
    return (
        <ItemList items={items}></ItemList>
    )
}