import { createContext, useContext, useState,useEffect } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const CartContext = createContext({} as iCartContext) 

interface iCartContextProps{
    children: React.ReactNode;
}

interface iCartContext{
    products: iProducts[] | null | undefined,
    addToCart: ( product : iProducts)=> void,
    cartProducts: iProducts[] | [],
    counter: number,
    totalPrice: number,
    removeAllCart: ()=> void,
    changeCart: (value: number,product: iProducts) => void,
    removeProduct: (id:number) => void
}

export interface iProducts{
    id: number,
    name: string,
    category: string,
    price: number,
    img: string,
    amount: number
}

export const CartProvider = ({ children }: iCartContextProps) => {
 
    // const { user } = useContext(UserContext)
    const [ products, setProducts ] = useState<iProducts[] | null>(null)
    const [ cartProducts, setCartProducts ] = useState([] as iProducts[])
    const [ counter,setCouter ] = useState(cartProducts.length)
    const [ totalPrice, setTotalPrice ] = useState(0)
   
   useEffect(() => {
    async function getProducts() {
        const token = JSON.parse(localStorage.getItem("@TOKEN") || '')  
        try{
            api.defaults.headers.common.authorization = `Bearer ${token}`
             const { data }  = await api.get<iProducts[]>("/products")
             setProducts(data)
        }catch(err){
          console.log(err)
        }
       }
       getProducts()
       setCouter(cartProducts.length)

       const totalPriceSum = ()=> {
     
        const result = cartProducts.reduce<number>((accumulator :number, obj ) => {
            return accumulator + (obj.amount * obj.price);
          }, 0);
        setTotalPrice(result)
      
   } 
      if(cartProducts.length > 0){
        totalPriceSum()
      }
   }, [cartProducts,cartProducts.length])

   const changeCart = (value: number ,product: iProducts) => {
     setCouter(counter + 1)
     let index = cartProducts.indexOf(product)
     let list = cartProducts
     list[index].amount += value
     if(list[index].amount === 0){
        list[index].amount = 1
      }
     setCartProducts([...list])
    

   }

   const removeProduct = ( id : number) => {
      
    const filterProduct = cartProducts.filter(prod=> prod.id !== id)
 
    setCartProducts(filterProduct)
   }

   const verifyCart = ( id : number) => {
       
    const cartItem = cartProducts.find((prod) => prod.id === id)

    if(cartItem === undefined){
        return false
      }else{
        return true
      }
   }

   const addToCart = ( product : iProducts) => {
    product.amount = 1
    if(!verifyCart(product.id)){
        setCartProducts([...cartProducts, product])
          
    }
      
   }

   const removeAllCart = () => {
    setCartProducts([])
    setTotalPrice(0)
   }


   
    return (
        <CartContext.Provider value={{ 
            products,
            addToCart,
            cartProducts,
            counter,
            totalPrice,
            removeAllCart,
            changeCart,
            removeProduct
            }}>
            { children }
        </CartContext.Provider>
    )
}