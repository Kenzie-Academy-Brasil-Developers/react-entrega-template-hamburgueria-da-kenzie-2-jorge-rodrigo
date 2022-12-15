import { LogoStyled } from "../../styles/logo"
import Search from "../../assets/searchBTN.png"
import Exit from "../../assets/exitBTN.png"
import Cart from "../../assets/cartBTN.png"
import { CartStyle, NavStyled } from "./style"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const HomePage = () => {
 
    const { products } = useContext(CartContext)

    console.log(products)
    return (
        <>
           <NavStyled>
              <LogoStyled>Burguer <span>Kenzie</span></LogoStyled>
              <div>
                  <img src={Search} alt="" />
                  <CartStyle>
                     <span>0</span>
                     <img src={Cart} alt="" />
                  </CartStyle>
                  <img src={Exit} alt="" />
              </div>
           </NavStyled>
        
        </>
    )
}

export default HomePage