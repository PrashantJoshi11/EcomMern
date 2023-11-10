import { createSlice } from '@reduxjs/toolkit';
const ProductSlice = createSlice({
    name: "Product",
    initialState: {
       AllData:[],
       isFetching:false,
       error:false
    },
    reducers: {
        Start:(state)=>{
            state.isFetching=true;
            state.error=false;
        },
        Success:(state,action)=>{
            
            state.isFetching=false;
            state.AllData=action.payload;
        },
        Fail:(state)=>{
            state.isFetching=false;
            state.error=true;
        }
       
}})
export default ProductSlice.reducer;
export const { Start,Success,Fail } = ProductSlice.actions;



// import {createSlice} from '@reduxjs/toolkit';


// const CartSlice = createSlice({
//     name:"cart",
//     initialState:{
//         product:[],
//         quantity:0,
//         total:0,

//     },
//     reducers:{
//         addCart(state,action){
//             state.product.push(action.payload);
//             state.quantity+=1;
//             state.total+=action.payload.vsprice*action.payload.quantity;
            
//         }
//     }
// })

// export default CartSlice.reducer;
// export const {addCart} = CartSlice.actions; 