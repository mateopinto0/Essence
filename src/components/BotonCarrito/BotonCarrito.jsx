import { useCart } from "../../context/CartContext";
import "./BotonCarrito.css";


export const BotonCarrito = ({ product, maxStock = Infinity }) => {
    const { getQty, updateQuantity, addToCart } = useCart();
    const contador = getQty(product.id);

    const incrementar = () => {
        if (contador === 0) {
            addToCart(product, 1); // primera vez: lo agrega al carrito
        } else {
            updateQuantity(product.id, contador + 1, maxStock);
        }
    };

    const decrementar = () => {
        if (contador > 0) {
            updateQuantity(product.id, contador - 1, maxStock);
        }
    };

    const handleAddToCart = () => {
        addToCart(product);
    }
    return (
        <>
        <div className="d-flex justify-content-center align-items-center btn-group mt-2">
            <button className="btn-funcion" onClick={decrementar} disabled={contador === 0}>-</button>
            <div className="w-100 d-flex align-items-center justify-content-center">{contador}</div>
            <button className="btn-funcion" onClick={incrementar} disabled={contador >= maxStock}>+</button>
        </div>
       
        </>
    );
};