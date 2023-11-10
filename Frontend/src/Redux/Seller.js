import { createSlice } from '@reduxjs/toolkit';




const SellerSlice = createSlice({
    name:"seller",
    initialState:{
        product:[],
    },
    reducers:{
        addSellerProduct(state,action){
            console.log("state data",state.product);
            state.product.push(action.payload);
               
        },
        
        removeSellerProduct(state,action){

            
            state.product.splice(action.payload,1);
        

           
            
        }
    }
})

export default SellerSlice.reducer;
export const {addSellerProduct,removeSellerProduct} = SellerSlice.actions; 
