import { CartContext, iProducts } from "../../../context/CartContext"
import { CartListStyled } from "./style"
import Trash from "../../../assets/trashBTN.png"
import { useContext } from "react"

interface iModalCard{
    product: iProducts
}



const ModalCard = ({ product }: iModalCard) => {

    const { changeCart,removeProduct } = useContext(CartContext)

    return (
        <CartListStyled key={product.id}> 
            <img src={product.img} alt={product.name} />
            <div>
              <h2>{product.name.substring(0, 10) + "..."}</h2>
              <img src={Trash} alt="icone de lixo" onClick={() => removeProduct(product.id)}/>
              <div>
                 <button onClick={() => {changeCart(-1,product)}}>-</button>
                 <p>{product.amount}</p>
                 <button onClick={() => { changeCart(1,product)}}>+</button>
              </div>
            </div>
           
             
        </CartListStyled>
    )
}


export default ModalCard