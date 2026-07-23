import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
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

export const getPedidoById = async (id) =>{
    try{
        const docRef= doc(db,"pedidos",id);
        const snapshot = await getDoc(docRef);
        if(snapshot.exists()){
            return {id:snapshot.id, ...snapshot.data()}
        }
    }catch(err){
        console.log(err);
        throw new Error("error: " + err)
    }
}

export const cambiarEstadoPedido = async(id,nuevoEstado) => {
    try{
        const ref= doc(db,"pedidos",id);
        await updateDoc(ref,{
            estado: nuevoEstado
        })
        console.log("Estado actualizado")
    }catch(err){
        throw new Error(err)
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
export const eliminarPedido = async(id) => {
    try{
            
            const docRef= doc(db,"pedidos",id);
    
            await deleteDoc(docRef);
            console.log("Pedido eliminado");
        }catch(err){
            throw new Error(err);
            
        }
}