import { ItemList } from "../ItemList/ItemList"


export const ItemListContainer = () => {
    
    const items = [
        {id: 1,imagenUrl:"/img/perfumeA.avif", nombre: "Perfume A", precio: 50, descripcion: "Un perfume fresco y floral."},
        {id: 2,imagenUrl:"/img/perfumeB.jpg", nombre: "Perfume B", precio: 70, descripcion: "Un perfume dulce y afrutado."},
        {id: 3,imagenUrl:"/img/perfumeC.png", nombre: "Perfume C", precio: 90, descripcion: "Un perfume amaderado y cálido."}
    ]
    
    return (
        <ItemList items={items}></ItemList>
    )
}