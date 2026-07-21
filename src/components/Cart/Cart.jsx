import { useCart } from "../../context/CartContext"
import { BotonCarrito } from "../BotonCarrito/BotonCarrito";
import { BotonFinalizarCompra } from "../BotonFinalizarCompra/BotonFinalizarCompra";
import { Item } from "../Item/Item";
import "./Cart.css"

export const Cart = () => {
    const {getCart, clearCart,getTotalPrice,removeFromCart} = useCart();
    const cartItems = getCart();

    const handleClearCart = () => {
        clearCart();
    }

    const handleRemoveItem = (id) => {
        removeFromCart(id);
    }

    return(
        <div className="d-flex flex-column justify-content-center align-items-center gap-2 container-cart">
        <h1>Carrito</h1>

        {
        cartItems.length === 0 ? (
            <p>El carrito esta vacio.</p>
        ) : (
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
                {
        cartItems.map((item)=>(
            <Item key={item.id} {...item}>
                <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                <BotonCarrito product={item} maxStock={item.stock}></BotonCarrito>
                <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                </div>
            </Item>
        ))}</div>)}

        <h3>Total: ${getTotalPrice().toFixed(2)} </h3>
        <div className="btn-group flex-column gap-2 mb-1">
        <button onClick={handleClearCart} className="btn-acento">Vaciar Carrito</button>
        <BotonFinalizarCompra></BotonFinalizarCompra>
        </div>
        </div>

    )
}