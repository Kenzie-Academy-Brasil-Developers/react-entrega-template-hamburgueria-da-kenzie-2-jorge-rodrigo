import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

interface iProduct{
    id: number,
    name: string,
    category: string,
    price: number,
    img: string,
    amount: number 
} 

interface iProductCardProps{
   product: iProduct
}

const ProductCard = ( { product } : iProductCardProps ) => {

    const { addToCart } = useContext(CartContext)

    return ( 
        <li key={product.id}>
             <img src={product.img} alt={product.name}/>
             <h2>{product.name}</h2>
             <p>{product.category}</p>
             <span>R$ {product.price}</span>
             <button onClick={() => addToCart(product)}>Adicionar</button>
        </li>
    )
}

export default ProductCard