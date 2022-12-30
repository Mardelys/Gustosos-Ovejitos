import { ProductItems } from "./CardProducts/Items";

const Reducer = (cart=[], action) => {
   if (action.type === 'ADD'){
       let tempcraft=cart.filter((ProductItems)=>ProductItems.id===action.payload.id)
       if(tempcraft < 1){
           return [...cart, action.payload]
       } else{
           return cart;
       }
   }
   return cart
}
export default Reducer;