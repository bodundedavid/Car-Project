import React, {FC, ReactNode} from 'react'
import { View } from  "./View";

interface Props{
    className ?: string;
    labelText : string; 
    id : string;
    min : number;
    max ?: number;
    value : number;
    theref: object;
    invalid:boolean;
    invalidText: ReactNode;
}

export const CarNumberInput:FC<Props> = (props: Props) => {
  return (
    <View {...props}/>
  )
}

// export default CarNumberInput