import axios from "axios";
import { loginFail, loginStart, loginSuccess } from "./UserRedux";
import { addSellerProduct } from "./Seller";
export const Loginapi=async(dispatch,user,owner)=>{
        // console.log("owner====>",owner);
        dispatch(loginStart());
        try{
            const res=await axios.post("http://localhost:5000/api/Auth/Login",user);
            console.log("apidata==========",res);
            const seller=res.data.isSeller;
            localStorage.setItem("seller",seller);
            if(res.status === 201){
                const err ="invalidaUser"
                return err
            }
            else if(owner==="Buyer" && res.data.isSeller===true || owner==="Seller" && res.data.isSeller===false ){

                console.log("Its a Buyer but isSeller is true");
                const auth ="auth"
                return auth
                
            }


           else if(res.status === 200){
            dispatch(loginSuccess(res.data));
            localStorage.setItem("isSeller", res.data.isSeller);
            const code="valid"
            return code;
            }
            
        }
        catch(err){
            dispatch(loginFail());
            return false;
                
        }

    return false
}
export const Registerapi=async(dispatch,user)=>{
   
    console.log("Data of User in Api",user);
    try{
        const res=await axios.post("http://localhost:5000/api/Auth/Register",user);
     
        console.log("Response From server", res);
        console.log("Response------->", res.data.message);


        
       if(res.status === 201 )
        {
            alert("Registered Successfully");
          return true;
            
        }
        else  if(res.data.message === "user present")
        {
            alert("Username is already Registered ");
            return false;
        }
        else  if(res.data.message === "Email present")
        {
            alert("Email is already Registered ");
            return false;
        }

        else{
            alert("There is an issue with the server")
        }
        
    }
    
    catch(err){
     console.log(err);
            
    }


}
export const Addproductsapi=async(dispatch,product)=>{
        
   dispatch(addSellerProduct(product))

    // try{
        
    //     console.log("data in api",product);
       
    //     const res=await axios.post("http://localhost:5000/api/product/new",product);
    //     console.log(res.data);
        
    // }
    // catch(err){
    //  console.log(err);
            
    // }

//  return false;
}