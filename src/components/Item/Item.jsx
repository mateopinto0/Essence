import { Link } from "react-router-dom"
import "./Item.css"

export const Item = ({id,imagenUrl,nombre,precio,descripcion,stock,children}) => {
    return (
        <div className="card-item p-3">
            <img className="card-img-top  itemlist-img" src={imagenUrl} alt={nombre} />
            <h3 className="text-oro">{nombre}</h3>
            <p className="precio text-principal small">${precio}</p>
            <p className="descripcion text-secundario">Descripción: {descripcion}</p>
            <p className="text-secundario small">Stock Restante: {stock}</p>
            
            {children}
        </div>
    )
}