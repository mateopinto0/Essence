import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "../config";

const pedidosCollection = collection(db,"pedidos");

export const getPedidos = async () => {
    try{
        const snapshot = await getDocs(pedidosCollection);
        return snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}))
    }catch(error){
        console.error("Error al obtener pedidos:", error);
        return [];
    }
}

export const crearPedido = async (comprador,carrito,total) => {
    const docRef = await addDoc(pedidosCollection,{
        comprador: comprador,
        items: carrito.map((item)=>({
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            qty: item.qty,
            subtotal: item.precio * item.qty
        })),
        montoTotal: total,
        estado: "pendiente_pago",
        fechaCreacion: serverTimestamp()
    })

    return docRef.id;
}