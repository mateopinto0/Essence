import { HeroBanner } from "../HeroBanner/HeroBanner"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer"

export const Tienda = () => {
    return(
        <div className="bg-fondo">
            <HeroBanner></HeroBanner>
            <ItemListContainer></ItemListContainer>
        </div>
    )
}