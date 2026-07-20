import "./Item.css"

export const Item = ({id,imagenUrl,nombre,precio,descripcion}) => {
    return (
        <div className="card p-3">
            <img className="card-img-top  item-img" src={imagenUrl} alt={nombre} />
            <h1>{nombre}</h1>
            <p>Precio: ${precio}</p>
            <p>Descripción: {descripcion}</p>
            <button>Ver mas</button>
        </div>
    )
}