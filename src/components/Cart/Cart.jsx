import { useCart } from "../../context/CartContext"
import { Item } from "../Item/Item";

export const Cart = () => {
    const {getCart, clearCart} = useCart();
    const cartItems = getCart();

    const handleClearCart = () => {
        clearCart();
    }

    return(
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
        <h1>Carrito</h1>

        {
        cartItems.length === 0 ? (
            <p>El carrito esta vacio.</p>
        ) : (
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
                {
        cartItems.map((item)=>(
            <Item key={item.id} {...item}></Item>
        ))}</div>)}

        <button onClick={handleClearCart}>Vaciar Carrito</button>
        </div>

    )
}