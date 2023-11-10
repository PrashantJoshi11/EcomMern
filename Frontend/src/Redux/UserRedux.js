import { createSlice } from '@reduxjs/toolkit';
const UserSlice = createSlice({
    name: "User",
    initialState: {
        currentUser:null,
       isFetching:false,
       error:false
    },
    reducers: {
        loginStart:(state)=>{
            state.isFetching=true;
            state.error=false;
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
        },
        loginFail:(state)=>{
            state.isFetching=false;
            state.error=true;
        }
       
}})
export default UserSlice.reducer;
export const { loginStart,loginSuccess,loginFail } = UserSlice.actions;



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