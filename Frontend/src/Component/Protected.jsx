import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Protected(props){
    const {Component}=props;
    const Navigate=useNavigate();

    useEffect(()=>{
        const login=localStorage.getItem("login");
        if(login==="false"){
                Navigate("/login");
        }
    },[])
        return(
            <div>
                 <Component />
            </div>
      
        )
}
export default Protected;