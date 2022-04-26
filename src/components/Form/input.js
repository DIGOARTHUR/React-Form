import React from 'react';
import {useField} from '@unform/core'
export default function Input ({name}){

    const {fieldName,registerField,defaultValue,error} = useField(name);
    return (
        <div/>
    )
}