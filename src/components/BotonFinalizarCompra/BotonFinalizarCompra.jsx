import { useState } from "react";
import { useCart } from "../../context/CartContext";

import { Spinner } from "../Spinner/Spinner";
import { descontarStock } from "../../service/ProductoService";
import { crearPedido } from "../../service/PedidoService";

const NUMERO_WHATSAPP = "5491163306976";
const ALIAS = "ALIAS.EJEMPLO"

export const BotonFinalizarCompra = ({ datosComprador, onSuccess }) => {
    const { getCart, getTotalPrice, clearCart } = useCart();
    const [cargando, setCargando] = useState(false);

    const generarMensaje = (pedidoId) => {
        const lineas = getCart().map(
            (item) => `- ${item.nombre} x${item.qty} — Precio Unitario: $${item.precio} - Subtotal: $${(item.qty * item.precio).toFixed(2)}`
        );

        return [
            "¡Hola! Quiero confirmar el pedido #" + pedidoId,
            "",
            ...lineas,
            "",
            `Total: $${getTotalPrice().toFixed(2)}`,
            `Alias de pago: ${ALIAS}`,
            "",
            "(Adjunte el comprobante de pago a continuacion)"
        ].join("\n");
    };

    const handleFinalizar = async (e) => {
        e.preventDefault();

        // 1. Validamos que haya ingresado los datos antes de hacer los await
        if (!datosComprador?.nombre || !datosComprador?.telefono) {
            alert("Por favor completa tu nombre y teléfono antes de continuar.");
            return;
        }
        //const ventanaWhatsApp = window.open("", "_blank");
        setCargando(true);

        try {
            // 2. Descontamos stock
            for (const item of getCart()) {
                const resultado = await descontarStock(item.id, item.qty);
                if (!resultado.ok) {
                    alert(`${item.nombre}: ${resultado.mensaje}`);
                    setCargando(false);
                    return; 
                }
            }

            
            const montoTotal= getTotalPrice();
            const pedidoId = await crearPedido(datosComprador, getCart(), montoTotal);

            
            const mensaje = generarMensaje(pedidoId);
            const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

            //ventanaWhatsApp.location.href = url;

             if (onSuccess) {
                onSuccess({ pedidoId, montoTotal ,items:getCart(),url});
            }

            clearCart();
            setCargando(false)

           
            
            

        } catch (error) {
            console.error("Error al procesar el pedido:", error);
            alert("Ocurrió un error al procesar el pedido. Intentá de nuevo.");
            setCargando(false);
        }
    };

    return (
        <button
            type="button"
            className="btn-acento"
            onClick={handleFinalizar}
            disabled={getCart().length === 0 || cargando}
        >
            {cargando ? <Spinner size={16} /> : "Finalizar compra por WhatsApp"}
        </button>
    );
};