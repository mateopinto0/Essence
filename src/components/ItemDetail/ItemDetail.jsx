import { useCart } from "../../context/CartContext"

export const ItemDetail = ({item}) => {
const {addToCart} = useCart();

const handleAddToCart = () => {
    addToCart(item);
}
    return (
        <div className="card p-3">
            <img className="card-img-top  item-img" src={item.imagenUrl} alt={item.nombre} />
            <h1>{item.nombre}</h1>
            <p>Precio: ${item.precio}</p>
            <p>Descripción: {item.descripcion}</p>
            <button className="btn btn-primary" onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}