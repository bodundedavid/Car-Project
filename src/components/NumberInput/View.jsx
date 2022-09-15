import CarInputText from './CarNumberInput';
import {NumberInput} from '@carbon/react'



export const View = ({theref, ...props }) => {
    return (
      <NumberInput
        {...props}
        {...theref}
      />
    )
  }