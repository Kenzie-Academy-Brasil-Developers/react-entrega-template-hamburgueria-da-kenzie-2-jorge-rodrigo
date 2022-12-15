
interface iProductListProps{
    children: React.ReactNode
}

const ProductList = ( { children } : iProductListProps ) => {
    

    return (
        <ul> 
             { children }
        </ul>
    )
}

export default ProductList