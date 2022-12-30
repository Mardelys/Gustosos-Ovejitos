import { useState,useEffect, createContext } from "react";
import { ProductItem } from "../CardProducts/Items";
export const DataContext = createContext();


export const DataProvider = (props) =>{
   

   const [products, setProducts] = useState([])

   useEffect(() =>{
      const product = ProductItem
      setProducts(product)
   },[])
   
   const value ={
      products : [products]
   }

   return(
      <DataContext.Provider value={value}>
         {props.children}
      </DataContext.Provider>
   )
}