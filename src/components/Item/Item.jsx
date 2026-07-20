import { Link } from "react-router-dom"
import "./Item.css"

export const Item = ({id,imagenUrl,nombre,precio,descripcion,children}) => {
    return (
        <div className="card-item p-3">
            <img className="card-img-top  itemlist-img" src={imagenUrl} alt={nombre} />
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Descripción: {descripcion}</p>
            
            {children}
        </div>
    )
}