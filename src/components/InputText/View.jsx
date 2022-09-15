import { TextInput } from  "@carbon/react";

export const View = ({...props}) => {
  return (
    <TextInput
        {...props}
        {...props.theref}
    />
  )
}