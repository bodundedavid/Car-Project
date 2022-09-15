import React, {FC, ReactNode} from 'react'
import {View} from "./View"

interface Props{
    className ?: string; 
    helperText ?: string; 
    labelText : string; 
    id : string;
    theref: object;
    invalid:boolean;
    invalidText: ReactNode;
}

export const CarTextArea:FC<Props> = (props: Props) => {
  return (
    <View {...props} />
  )
}

// export default CarTextArea