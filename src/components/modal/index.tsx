import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Button from "../Button"
import ModalCard from "./modalCard"
import {  ModalContainer, ModalMain, TotalDivStyled } from "./style"

interface iModalProps{
    setOff: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ( { setOff}: iModalProps ) => {

    const { cartProducts,totalPrice,removeAllCart } = useContext(CartContext)
    
     
    return (
     
         <ModalContainer>
             <ModalMain>
                <div>
                 <h2>Carrinho de compras</h2>
                 <p onClick={() => setOff(false)}>X</p>
                </div>
                {cartProducts.length > 0 ? 
                <section>
                    <ul>
                    {cartProducts.map((product) => <ModalCard product={product}/>)}
                    </ul>
                    <TotalDivStyled>
                        <h3>Total</h3>
                        <p>R$ {totalPrice.toFixed(2) }</p>
                    </TotalDivStyled>
                    <Button color="grey" click={removeAllCart}>Remover Todos </Button>

                </section>
                : 
                <div>
                    <h3>Sua sacola está vazia</h3>
                    <p>Adicione itens</p> 
                </div>}
             </ModalMain>
         </ModalContainer>
      
    )
}


export default Modal