import { TextArea } from  "@carbon/react";

import React from 'react'

export const View = ({theref, ...props }) => {
  return (
    <TextArea 
        {...props}
        {...theref}
    />
  )
}
