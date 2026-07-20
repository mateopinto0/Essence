import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { getItemById } from "../../service/ProductoService.js";


export const ItemDetailContainer = () => {
    const {id}= useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        // 2. Acá iría la llamada a tu productoServicio (Firebase)
        getItemById(id).then((data) => setItem(data));
        // Por ahora simulamos que trae el perfume después de cargar:
       /* const perfumeFicticio = {
            id: "1",
            nombre: "Sauvage",
            marca: "Dior",
            precio: 180000,
            stock: 8,
            imagenUrl: "https://url-de-la-foto.jpg"
        };
        */
        
    }, [id]);

    // 3. Controlás que no intente renderizar si el item todavía es null
    if (!item) return <p>Cargando perfume...</p>;

    return (
        <ItemDetail item={item}/>
    );
}