import { useCart } from "../../context/CartContext"
import { BotonCarrito } from "../BotonCarrito/BotonCarrito";
import "./ItemDetail.css"
export const ItemDetail = ({item}) => {
const {addToCart} = useCart();

const handleAddToCart = () => {
    addToCart(item);
}
    return (
        <div className="d-flex justify-content-center align-items-center container-item-detail">
    <div className="item-detail shadow-sm">
        <img className="item-img" src={item.imagenUrl} alt={item.nombre} />
        
   
        <h3 className="item-nombre">{item.nombre}</h3>
        
        <p className="precio">Precio: ${item.precio}</p>
        <p className="descripcion">Descripción: {item.descripcion}</p>

        <div className="d-flex flex-column align-items-center justify-content-center mt-3">
            <BotonCarrito product={item} maxStock={item.stock} />
            <button disabled={item.stock <= 0} className="btn-acento mt-3" onClick={handleAddToCart}>
                Agregar al carrito
            </button>
        </div>
    </div>
</div>
    )
}