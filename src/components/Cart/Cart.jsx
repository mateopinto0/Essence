import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { BotonCarrito } from "../BotonCarrito/BotonCarrito";
import { CarritoModal } from "../CarritoModal/CarritoModal";
import { CompraExitosa } from "../CompraExitosa/CompraExitosa";
import { Item } from "../Item/Item";
import "./Cart.css";
import { ItemCarrito } from "../ItemCarrito/ItemCarrito";

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
                items={pedidoRealizado.items} url={pedidoRealizado.url}
            />
        );
    }

    
    if (cartItems.length === 0) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center gap-2 container-cart">
                <h1>Carrito</h1>
                <p>El carrito está vacío.</p>
            </div>
        );
    }

   
    return (
        <div className="container py-5 container-cart">
    <h1 className="text-principal mb-4 text-center text-md-start">Tu Carrito</h1>

    <div className="row">
 
        <div className="col-12 col-lg-8 mb-4">
            {cartItems.map((item) => (
                <ItemCarrito key={item.id} {...item}>
                   
                    <BotonCarrito product={item} maxStock={item.stock} />
                    
                    <button 
                        className="btn btn-outline-danger" 
                        onClick={() => handleRemoveItem(item.id)}
                    >
                        Eliminar
                    </button>
                </ItemCarrito>
            ))}
        </div>

        
        <div className="col-12 col-lg-4 z-0" >
           
            <div className="bg-blush-suave p-4 rounded-custom border-custom shadow-sm sticky-md-top" style={{ top: '20px' }}>
                <h4 className="text-principal mb-3">Resumen de compra</h4>
                
                <hr className="border-borde opacity-50" />
                
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <span className="text-secundario fs-5">Total a pagar:</span>
                    <span className="text-oro fw-bold fs-3">${getTotalPrice().toFixed(2)}</span>
                </div>

   
                <div className="d-flex flex-column gap-3">
                    
                    <CarritoModal onPedidoExitoso={(datos) => setPedidoRealizado(datos)} />
                    
                   
                    <button onClick={handleClearCart} className="btn btn-outline-danger w-100">
                        Vaciar Carrito
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};