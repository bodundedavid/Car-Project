import { Button } from  "@carbon/react";


export const View = ({ children, ...props }) => {
    return(
        <Button {...props}>
            {children}
        </Button>
    )
};