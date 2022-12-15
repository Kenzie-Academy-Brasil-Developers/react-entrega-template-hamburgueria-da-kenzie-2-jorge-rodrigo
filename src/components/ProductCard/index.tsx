
interface iProduct{
    id: number,
    name: string,
    category: string,
    price: number,
    img: string
}

interface iProductCardProps{
   product: iProduct
}

const ProductCard = ( { product } : iProductCardProps ) => {


    return ( 
        <li key={product.id}>
             <img src={product.img} alt={product.name}/>
             <h2>{product.name}</h2>
             <p>{product.category}</p>
             <span>R$ {product.price}</span>
             <button>Adicionar</button>
        </li>
    )
}

export default ProductCard