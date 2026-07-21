import { useEffect, useMemo, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { getItems } from "../../service/ProductoService";
import { Spinner } from "../Spinner/Spinner";
import { useSearch } from "../../context/SearchContext";


export const ItemListContainer = () => {
    
    const[items,setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {busqueda} = useSearch();

    useEffect(()=>{
        getItems().then((data)=> setItems(data))
        .finally(()=> setLoading(false))
        .catch((error)=> console.log(error))
    },[])

   const itemsFiltrados = useMemo(() => {
        if (!busqueda) return items;
        const textoBusqueda = busqueda.toLowerCase();
        return items.filter((item) =>{
           return( 
            item.nombre?.toLowerCase().includes(textoBusqueda) ||
            item.marca?.toLowerCase().includes(textoBusqueda) ||
            item.tipo?.toLowerCase().includes(textoBusqueda)
        )
   });
    }, [items, busqueda]);

    if(loading) return <Spinner fullPage={true}></Spinner>
    return (
         <div>
            {itemsFiltrados.length === 0 ? (
                <p className="mt-3">No encontramos productos con ese nombre.</p>
            ) : (
                <ItemList items={itemsFiltrados} />
            )}
        </div>
    )
}