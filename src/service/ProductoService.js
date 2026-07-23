import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, runTransaction, updateDoc } from "firebase/firestore";
import { db } from "../config";

const productosCollection = collection(db,"productos");

export const getItems = async () => {

    try{
    const snapshot = await getDocs(productosCollection);
    return snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
    }catch(error){
        console.error("Error al obtener los productos:", error);
        return [];
    }
}


export const getItemById = async (id) => {
    try {
        const snapshot = await getDocs(productosCollection);
        const item = snapshot.docs.find((doc) => doc.id === id);
        return item ? {id: item.id, ...item.data()} : null;
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        return null;
    }
}
  
export const descontarStock = async (id, cantidadComprada) => {
    const productRef= doc(db,"productos",id);

    try{
        await runTransaction(db,async(transaction)=> {
            const productDoc = await transaction.get(productRef);

            if (!productDoc.exists()) {
                throw new Error("El producto ya no existe");
            }

            const stockActual = productDoc.data().stock;

            if (stockActual < cantidadComprada) {
                throw new Error(`Solo quedan ${stockActual} unidades disponibles`);
            }

            transaction.update(productRef, { stock: stockActual - cantidadComprada });
        });

        return {ok:true}
    }catch(error){
        return {ok:false, mensaje:error.message};
    }
}

export const addProducto = async (productData) => {
    
    try{
    const docRef = await addDoc(productosCollection,productData)
    return docRef.id;    
    }catch(error){
        throw new Error("mensaje de error: " + error)
    }
}

export const removeProducto = async (productId) => {
    try{
        
        const docRef= doc(db,"productos",productId);

        await deleteDoc(docRef);
        console.log("Producto eliminado");
    }catch(err){
        throw new Error(err);
        
    }
}

export const editarItem = async(id,productData) => {
    try{
        const docRef= doc(db,"productos",id);
        await updateDoc(docRef,productData)
        console.log("Producto Actualizado")
    }catch(err){
        throw new Error(err)
    }
}