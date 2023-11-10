import React from 'react'
import { Field,ErrorMessage } from 'formik';
import TypeError from './TypeError';
function Input(props) {
    const {label,name,...rest}=props;
  return (
    <div >
        <label style={{fontSize:"20px"}} htmlFor={name}  >{label}</label>:<br></br>
        <Field style={{margin:"10px 0",height:"40px",width:"300px"}} id={name} name={name} {...rest} /><br></br>
        <ErrorMessage  name={name} component={TypeError} />    
    </div>
  )
}

export default Input