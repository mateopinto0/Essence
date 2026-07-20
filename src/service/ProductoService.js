import { collection, getDocs } from "firebase/firestore";
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
  