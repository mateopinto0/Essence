import { useCart } from "../../context/CartContext"
import { BotonCarrito } from "../BotonCarrito/BotonCarrito";
import "./ItemDetail.css"
export const ItemDetail = ({item}) => {
const {addToCart} = useCart();

const handleAddToCart = () => {
    addToCart(item);
}
    return (
        <div className="card p-3 item-detail">
            <img className="card-img-top  item-img" src={item.imagenUrl} alt={item.nombre} />
            <h1>{item.nombre}</h1>
            <p>Precio: ${item.precio}</p>
            <p>Descripción: {item.descripcion}</p>
            <BotonCarrito product={item}></BotonCarrito>
            <button className="btn-acento mt-4" onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}