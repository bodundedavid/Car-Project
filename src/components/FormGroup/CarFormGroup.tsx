import React, {FC} from 'react'
import {View} from './View';

interface Props{
  legendId ?: string;
  legendText : string;
  children : React.ReactNode;
}

const CarFormGroup:FC<Props> = (props: Props) => {
  return (
      <View {...props} />
  )
}

export default CarFormGroup