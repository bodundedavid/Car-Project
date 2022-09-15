import {FormGroup} from '@carbon/react';


export const View = ({children, ...props }) => {
  return (
    <FormGroup 
        {...props}
    >
        {children}
    </FormGroup>
  )
}
