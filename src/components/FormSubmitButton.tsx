"use client";

import { ComponentProps } from "react";
// import {experimental_useFormStatus as useFormStatus } from 'react-dom'
type FormSubmitButtonProps = {
    // children props allows us to pass a component between the opening and the closing if the another component
children:React.ReactNode
clasName?: String,
} & ComponentProps<"button">

export default function FormSubmitButton({children,className} : FormSubmitButtonProps) {
// const {pending} = useFormStatus();

return(
<button className={`btn btn-primary ${className}`}
type="submit"
// disabled={pending}
>{children}</button>
) 
}