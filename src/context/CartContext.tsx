import React from "react";
import { createContext, useState,useEffect } from "react";
import { iSearchForm } from "../pages/home";
import { api } from "../services/api";
import { notifyError, notifySucess } from "../services/toastfy";


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
    removeProduct: (id:number) => void,
    searchProducts: [] | iProducts[],
    searchProduct: (data : iSearchForm) => void,
    searchOn: boolean,
}

export interface iProducts{
    id: number,
    name: string,
    category: string,
    price: number,
    img: string,
    amount: number,
}

export const CartProvider = ({ children }: iCartContextProps) => {
 
    const [ products, setProducts ] = useState<iProducts[] | null>(null)
    const [ cartProducts, setCartProducts ] = useState([] as iProducts[])
    const [ counter,setCouter ] = useState(cartProducts.length)
    const [ totalPrice, setTotalPrice ] = useState(0)
    const [ searchOn, setSearchOn ] = useState(false)
    const [ searchProducts, setSearchProducts] = useState([] as iProducts[])
    const [ search, setSearch ] = useState<string>('')
    const cartStorage= JSON.parse(`${localStorage.getItem("@CARTPRODUCTS")}`)

   
   useEffect(() => {
    async function getProducts() {
        const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`)  
        try{
            api.defaults.headers.common.authorization = `Bearer ${token}`
             const { data }  = await api.get<iProducts[]>("/products")
             setProducts(data)
        }catch(err : any){
          notifyError(err.response.data)
        }
       }
       getProducts()
      
      if(cartProducts.length > 0) {
        const amoutCounter = cartProducts.reduce<number>((accumulator :number, obj ) => {
          return accumulator + obj.amount;
        }, 0);
        setCouter(amoutCounter)
      }
      if(cartProducts.length === 0){
        setCouter(0)
      }

       const totalPriceSum = ()=> {
     
        const result = cartProducts.reduce<number>((accumulator :number, obj ) => {
            return accumulator + (obj.amount * obj.price);
          }, 0);
        setTotalPrice(result)
      
   } 
      if(cartProducts.length > 0){
        totalPriceSum()

      }
      if(cartProducts.length <= 0){
        if(cartStorage){
          setCartProducts(cartStorage)
        }
      }
      
   }, [cartProducts,cartProducts.length,cartStorage])

   useEffect(() => {
      
       async function getSearch(){
        const { data }  = await api.get<iProducts[]>("/products")
        const productSearched = data.filter((prod)=> {
            const name = prod.name.toLowerCase()
            const category = prod.category.toLowerCase()
            return name.includes(search.toLowerCase()) || category.includes(search.toLowerCase())
        }) 
        setSearchProducts(productSearched)
        setSearchOn(true)
       }  
  
        
       if(search){
         getSearch()
       }
   }, [search])



   const changeCart = (value: number ,product: iProducts) => {
    
     let index = cartProducts.indexOf(product)
     let list = cartProducts
     list[index].amount += value
     if(list[index].amount === 0){
        list[index].amount = 1
      }
     setCartProducts([...list])
     localStorage.setItem("@CARTPRODUCTS" , JSON.stringify([...list]))
    

   }

   const removeProduct = ( id : number) => {
      
    const filterProduct = cartProducts.filter(prod=> prod.id !== id)
 
    setCartProducts(filterProduct)
    localStorage.setItem("@CARTPRODUCTS" , JSON.stringify(filterProduct))
    notifySucess("Produto removido")
   }

   const verifyCart = ( id : number) => {
       
    const cartItem = cartProducts.find((prod) => prod.id === id)

    if(cartItem === undefined){
        return false
      }else{
        notifyError("O Produto ja esta no carrinho!")
        return true
        
      }
   }

   const addToCart = ( product : iProducts) => {
    product.amount = 1
    if(!verifyCart(product.id)){
        setCartProducts([...cartProducts, product])
        localStorage.setItem("@CARTPRODUCTS" , JSON.stringify([...cartProducts, product]))
        notifySucess("Produto Adicionado ao Carrinho com sucesso")
        setSearchOn(false)
    }
      
   }

   const removeAllCart = () => {
    setCartProducts([])
    setTotalPrice(0)
    notifySucess("Produtos Removidos do carrinho")
    localStorage.removeItem("@CARTPRODUCTS")
   }

   const searchProduct = (data : iSearchForm) => {
    setSearch(data.search)
    if(data.search === undefined){
      setSearchOn(false)
    }
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
            removeProduct,
            searchProducts,
            searchProduct,
            searchOn
            }}>
            { children }
        </CartContext.Provider>
    )
}