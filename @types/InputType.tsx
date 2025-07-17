import { ReactNode } from "react";

export interface InputType {
    placeholder: string;
    type: string;
    classList?: string;
    icon?: ReactNode,
    iconPosition?: "left" | "right",
    inputClass?: string
}