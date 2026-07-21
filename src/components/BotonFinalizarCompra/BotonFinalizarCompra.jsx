import { useState } from "react";
import { useCart } from "../../context/CartContext";

import { Spinner } from "../Spinner/Spinner";
import { descontarStock } from "../../service/ProductoService";

const NUMERO_WHATSAPP = "5491163306976";

export const BotonFinalizarCompra = () => {
    const { getCart, getTotalPrice, clearCart } = useCart();
    const [cargando, setCargando] = useState(false);

    const generarMensaje = () => {
        const lineas = getCart().map(
            (item) => `- ${item.nombre} x${item.qty} — $${(item.qty * item.precio).toFixed(2)}`
        );

        return [
            "Hola! Quiero hacer este pedido:",
            "",
            ...lineas,
            "",
            `Total: $${getTotalPrice().toFixed(2)}`,
        ].join("\n");
    };

    const handleFinalizar = async () => {
        setCargando(true);
          const nuevaVentana = window.open("", "_blank");
      
        for (const item of getCart()) {
            const resultado = await descontarStock(item.id, item.qty);
            if (!resultado.ok) {
                alert(`${item.nombre}: ${resultado.mensaje}`);
                setCargando(false);
                return; 
            }
        }

       
        const mensaje = generarMensaje();
        const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
         if (nuevaVentana) {
        nuevaVentana.location.href = url;
    } else {
       
        window.location.href = url;
    }
        clearCart();
        setCargando(false);
    };

    return (
        <button
            type="button"
            className=" btn-acento"
            onClick={handleFinalizar}
            disabled={getCart().length === 0 || cargando}
        >
            {cargando ? <Spinner size={16} /> : "Finalizar compra por WhatsApp"}
        </button>
    );
};