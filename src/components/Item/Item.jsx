import { Link } from "react-router-dom"
import "./Item.css"

export const Item = ({id,imagenUrl,nombre,precio,descripcion}) => {
    return (
        <div className="card p-3">
            <img className="card-img-top  item-img" src={imagenUrl} alt={nombre} />
            <h1>{nombre}</h1>
            <p>Precio: ${precio}</p>
            <p>Descripción: {descripcion}</p>
            <Link to={`/detalle/${id}`} className="btn btn-primary">Ver más</Link>
        </div>
    )
}