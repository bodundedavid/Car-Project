import React, {FC} from 'react'
import { View } from  "./View";

interface Props{
    headers : object[];
    rows : object[];
    title: string;
}

export const CarDataTable:FC<Props> = (props: Props) => {
  return (
    <View {...props}/>
  )
}