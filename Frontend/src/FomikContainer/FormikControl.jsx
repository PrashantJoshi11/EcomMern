import React from 'react'
import Input from './Input';
import CheckBox from './CheckBox';
function FormikControl(props) {
    const {control, ...rest}=props;
    switch(control){
       case "input" : 
       return <Input {...rest} /> 
       case "Checkbox":
        return <CheckBox {...rest} />
       default: return null
    }

}

export default FormikControl