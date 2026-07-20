import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe ser usado dentro de un CartProvider");
    }
    return context;
}

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const isInCart = (id) =>{
        return cartItems.some((item) => item.id === id);
    }

    const addToCart = (item) => {
        if(isInCart(item.id)){
            alert("El producto ya está en el carrito");
            return;
        }
        setCartItems([...cartItems, {...item}]);
    };

    const removeFromCart = (id) => {
        const updateCart = cartItems.filter((cartItem)=> cartItem.id !== id)
        setCartItems(updateCart);
        alert("Producto eliminado");
    };

    const clearCart = () =>{
        setCartItems([]);
    }

    const getCantidadItems = () => {
        return cartItems.length;
    }

    const getCart = () => {
        return cartItems;
    }
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCantidadItems , getCart}}>
            {children}
        </CartContext.Provider>
    );
};