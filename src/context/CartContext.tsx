import { createContext, useContext, useState,useEffect } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const CartContext = createContext({} as iCartContext) 

interface iCartContextProps{
    children: React.ReactNode;
}

interface iCartContext{
    products: iProducts[] | null | undefined
}

interface iProducts{
    id: number,
    name: string,
    category: string,
    price: number,
    img: string
}

export const CartProvider = ({ children }: iCartContextProps) => {
 
    // const { user } = useContext(UserContext)
    const [ products,setProducts ] = useState<iProducts[] | null>()
   
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
   }, [])

    return (
        <CartContext.Provider value={{ products }}>
            { children }
        </CartContext.Provider>
    )
}