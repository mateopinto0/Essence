import { useCart } from "../../context/CartContext"

const NUMERO_WHATSAPP= "5491163306976";

export const BotonFinalizarCompra = () => {

    const {getCart, getTotalPrice}=useCart();
     const generarMensaje = () => {
        if (getCart().length === 0) return "";

        const lineas = getCart().map(
            (item) => `- ${item.nombre} x${item.qty} — $${(item.qty * item.precio).toFixed(2)}`
        );

        const mensaje = [
            "Hola! Quiero hacer este pedido:",
            "",
            ...lineas,
            "",
            `Total: $${getTotalPrice().toFixed(2)}`,
        ].join("\n");

        return mensaje;
    };

    const handleFinalizar = () => {
        const mensaje = generarMensaje();
        const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    };

    return (
        <button
            type="button"
            className=" btn-acento"
            onClick={handleFinalizar}
            disabled={getCart().length === 0}
        >
            Finalizar compra por WhatsApp
        </button>
    );
}