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

    const addToCart = (item,qty=1) => {
         const existing = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existing) {
        setCartItems(
            cartItems.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, qty: cartItem.qty + qty }
                    : cartItem
            )
        );
        return;
    }

    setCartItems([...cartItems, { ...item, qty }]);
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
    const getQty = (id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    return item ? item.qty : 0;
    };
    const updateQuantity = (id, qty, maxStock = Infinity) => {
    const clamped = Math.min(maxStock, Math.max(0, Math.round(qty)));

    if (clamped === 0) {
        removeFromCart(id);
        return;
    }

    setCartItems(
        cartItems.map((cartItem) =>
            cartItem.id === id ? { ...cartItem, qty: clamped } : cartItem
        )
    );
  
};

const getTotalPrice = () => {
    return cartItems.reduce((total,item) => total + item.precio *item.qty,0);
}
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCantidadItems , getCart, getQty, updateQuantity, isInCart, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    );
};