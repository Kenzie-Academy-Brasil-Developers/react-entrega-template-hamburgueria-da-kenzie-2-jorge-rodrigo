import { LogoStyled } from "../../styles/logo"
import Search from "../../assets/searchBTN.png"
import Exit from "../../assets/exitBTN.png"
import Cart from "../../assets/cartBTN.png"
import { CartStyle, NavStyled,ListSectionStyled, SearchBarDiv } from "./style"
import { useContext,useState } from "react"
import { CartContext } from "../../context/CartContext"
import ProductList from "../../components/ProductList"
import ProductCard from "../../components/ProductCard"
import { Link } from "react-router-dom"

const HomePage = () => {
 
    const { products } = useContext(CartContext)
    const [ active, setActive ] = useState(false)

    const activeOn = () => {
      if(!active){
         setActive(true)
      }
      if(active){
         setActive(false)
      }
    }

    return (
        <>
           <NavStyled onActive={active}>
              <LogoStyled>Burguer <span>Kenzie</span></LogoStyled>
              <div>
                  <SearchBarDiv onActive={active} >
                    <img src={Search} alt="" onClick={ activeOn }/>
                     <div>
                        <input type="text" disabled={!active} placeholder="Digite sua pesquisa..."/>
                     </div>
                  </SearchBarDiv>
                  <CartStyle>
                     <span>0</span>
                     <img src={Cart} alt="" />
                  </CartStyle>
                  <Link to='/' onClick={() => localStorage.clear() }><img src={Exit} alt="" /></Link>
              </div>
           </NavStyled>
           <ListSectionStyled>
             <ProductList>
                {products && products.map(prod => <ProductCard product={prod}/> )}
             </ProductList>
           </ListSectionStyled>
    
        </>
    )
}

export default HomePage