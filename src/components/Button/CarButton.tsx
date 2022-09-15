import React, { FC, ReactNode } from "react";
import {View} from "./View"

export interface Props{
    children: ReactNode;
    className ?: string; 
    kind?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "danger"
    | "warning";
    onClick: () => void;
    size : string;
}


export const CarButton = (props: Props) => {
    return <View {...props} />;
};