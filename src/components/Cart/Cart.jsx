import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { BotonCarrito } from "../BotonCarrito/BotonCarrito";
import { CarritoModal } from "../CarritoModal/CarritoModal";
import { CompraExitosa } from "../CompraExitosa/CompraExitosa";
import { Item } from "../Item/Item";
import "./Cart.css";

export const Cart = () => {
    const { getCart, clearCart, getTotalPrice, removeFromCart } = useCart();
    const cartItems = getCart();

    // 1. Manejamos el estado del pedido acá arriba
    const [pedidoRealizado, setPedidoRealizado] = useState(null);

    const handleClearCart = () => {
        clearCart();
    };

    const handleRemoveItem = (id) => {
        removeFromCart(id);
    };

    // 2. Si hay un pedido realizado, mostramos CompraExitosa PRIMERO que todo
    if (pedidoRealizado) {
        return (
            <CompraExitosa 
                pedidoId={pedidoRealizado.pedidoId} 
                montoTotal={pedidoRealizado.total || pedidoRealizado.montoTotal} 
                items={pedidoRealizado.items}
            />
        );
    }

    // 3. Si el carrito está vacío y no hay compra recién hecha:
    if (cartItems.length === 0) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center gap-2 container-cart">
                <h1>Carrito</h1>
                <p>El carrito está vacío.</p>
            </div>
        );
    }

    // 4. Si hay productos en el carrito:
    return (
        <div className="d-flex flex-column justify-content-center align-items-center gap-2 container-cart">
            <h1>Carrito</h1>

            <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
                {cartItems.map((item) => (
                    <Item key={item.id} {...item}>
                        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                            <BotonCarrito product={item} maxStock={item.stock} />
                            <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>
                                Eliminar
                            </button>
                        </div>
                    </Item>
                ))}
            </div>

            <h3>Total: ${getTotalPrice().toFixed(2)}</h3>

            <div className="btn-group flex-column gap-2 mb-1">
                <button onClick={handleClearCart} className="btn-acento">
                    Vaciar Carrito
                </button>
                
                {/* 5. Le pasamos el handler a CarritoModal */}
                <CarritoModal onPedidoExitoso={(datos) => setPedidoRealizado(datos)} />
            </div>
        </div>
    );
};