import { createSlice } from '@reduxjs/toolkit';




const CartSlice = createSlice({
    name:"cart",
    initialState:{
        product:[],
        quantity:0,
        total:0,

    },
    reducers:{
        addCart(state,action){
          const existingCartItemIndex=state.product.findIndex((item)=>item._id===action.payload._id);
          const existingItem= state.product[existingCartItemIndex];

          if (existingItem) {
            const item={
                ...existingItem,
                quantity:existingItem.quantity+action.payload.quantity
            }
            state.total+=action.payload.vsprice*action.payload.quantity;
            state.product[existingCartItemIndex]=item;
          
          } 

          else{

            console.log("state data",state.product);
            state.product.push(action.payload);
            state.quantity+=1;
            state.total+=action.payload.vsprice*action.payload.quantity;
         
        }  
            
        },
        
        removeCart(state,action){

            state.total-=state.product[action.payload].vsprice*state.product[action.payload].quantity;
            state.product.splice(action.payload,1);
            state.quantity-=1;
            // state.total=0;
            console.log("data to be delted==>",state.product);
            // state.total-=state.product[action.payload].vsprice*action.payload.quantity;

           
            
        }
    }
})

export default CartSlice.reducer;
export const {addCart,removeCart} = CartSlice.actions; 


// const CartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         product: [],
//         quantity: 0,
//         total: 0,
//     },
//     reducers: {
//         addCart(state, action) {
//             // state.product.push(action.payload);
//             const datainarray = JSON.parse(localStorage.getItem('carttty'));
//             console.log('assasas', datainarray === null)
//             console.log('assasas', datainarray === null)
//             if (state.quantity === 0 && datainarray === null) {
//                 state.product = [...state.product, action.payload]
//                 state.quantity += 1;
//                 state.total += action.payload.vsprice * action.payload.quantity;
//                 localStorage.setItem('carttty', JSON.stringify(state));
//                 console.log("state in  if")
//             }
//             else if (state.quantity === 0 && datainarray !== null) {
//                 let newState = {
//                     product: datainarray?.product,
//                     quantity: datainarray?.quantity,
//                     total: datainarray?.total
//                 }
//                 newState.product = [...newState.product, action.payload]
//                 newState.quantity = newState.quantity + 1;
//                 newState.total += action.payload.vsprice * action.payload.quantity;
//                 localStorage.setItem('carttty', JSON.stringify(newState));
//                 console.log("state in else if")
//             }
//             else {
//                 const datainarray = JSON.parse(localStorage.getItem('carttty'));
//                 state.product = [...datainarray.product, action.payload]
//                 state.quantity = datainarray.quantity + 1;
//                 state.total += action.payload.vsprice * action.payload.quantity;
//                 localStorage.setItem('carttty', JSON.stringify(state));
//                 console.log("state in else ")
//             }
//         },
//     },
// })
// export default CartSlice.reducer;
// export const { addCart } = CartSlice.actions;





