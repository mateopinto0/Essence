import { useCart } from "../../context/CartContext"
import "./IconoCarrito.css"
export const IconoCarrito = () => {
    const {getCantidadItems} = useCart();
    const cantidad = getCantidadItems();

    return (
        <div className="icono-carrito-wrapper">
            <button type="button" className="btn icono-carrito-boton">
                <i className="bi bi-cart-fill"></i>
            </button>

            {cantidad > 0 && (
                <span className="icono-carrito-badge">{cantidad}</span>
            )}
        </div>
    );
}