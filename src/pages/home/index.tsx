import { LogoStyled } from "../../styles/logo"
import Search from "../../assets/searchBTN.png"
import Exit from "../../assets/exitBTN.png"
import Cart from "../../assets/cartBTN.png"
import { CartStyle, NavStyled,ListSectionStyled, SearchBarDiv, MainDiv,NavContainer } from "./style"
import { useContext,useState,useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import ProductList from "../../components/ProductList"
import ProductCard from "../../components/ProductCard"
import { Link } from "react-router-dom"
import Modal from "../../components/modal"
import { SubmitHandler, useForm } from "react-hook-form"
import Input from "../../components/Input"
import { UserContext } from "../../context/UserContext"

export interface iSearchForm{
   search: string,
}  

const HomePage = () => {
 
    const { products,counter,searchProduct,searchOn,searchProducts } = useContext(CartContext)
    const { exit,navigate } = useContext(UserContext)
    const [ active, setActive ] = useState(false)
    const [ modalOn, setModalOn ] = useState(false)
    const { register,handleSubmit,reset } = useForm<iSearchForm>()
    const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`)
   
    useEffect(()=> {
      if(!token){
         navigate('/')
      }
   },[navigate,token])

    const onHandleSubmit: SubmitHandler<iSearchForm> = (data)  => {
      if(!active){
         searchProduct(data)
         reset()
      }
         
    }
 
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
          {modalOn && <Modal setOff={setModalOn}/>}
           <NavStyled onActive={active}>
             <NavContainer>
             <LogoStyled>Burguer <span>Kenzie</span></LogoStyled>
              <div>
                  <SearchBarDiv onActive={active} >
                     <div>
                        <form onSubmit={handleSubmit(onHandleSubmit)}>
                         <Input type={'text'} placeholder={"Sua pesquisa..."} id={"searach"} register={register("search")} disable={!active}/>
                          <button><img src={Search} alt="" onClick={ activeOn }/></button>
                        </form>
                     </div>
                  </SearchBarDiv>
                  <CartStyle>
                     <span>{counter}</span>
                     <img src={Cart} alt=""  onClick={() => setModalOn(true)}/>
                  </CartStyle>
                  <Link to='/' onClick={ exit }><img src={Exit} alt="" /></Link>
              </div>
             </NavContainer>
           </NavStyled>
           <MainDiv>
            <ListSectionStyled>
               <ProductList>
                 {!searchOn && products && products.map(prod => <ProductCard product={prod}/> )}
                 {searchOn && searchProducts && searchProducts.map(prod => <ProductCard product={prod}/>)}
               </ProductList>
            </ListSectionStyled>
           </MainDiv>
        </>
    )
}

export default HomePage