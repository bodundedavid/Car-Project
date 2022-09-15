import React, {ReactNode} from 'react';
import {FC} from 'react'
import {View} from './View'

interface Props{
    className ?: string; 
    helperText ?: string; 
    labelText : string; 
    id : string; 
    type : string;
    name: string;
    theref: object;
    invalid:boolean;
    invalidText: ReactNode;
}

export const CarInputText:FC<Props> = (props: Props) => {
  return (
    <View {...props} />
  )
}

// export default CarInputText