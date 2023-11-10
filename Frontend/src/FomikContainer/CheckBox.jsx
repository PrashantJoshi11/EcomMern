import React from 'react'
import { Field} from 'formik';
import TypeError from './TypeError';
function CheckBox(props) {
    const {label,name,...rest}=props;
  return (
    <div >
        
        <Field style={{height:"18px",width:"18px"}} id={name} name={name} {...rest} />
         
    </div>
  )
}

export default CheckBox