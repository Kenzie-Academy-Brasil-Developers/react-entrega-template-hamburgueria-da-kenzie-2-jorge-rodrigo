import { UseFormRegisterReturn } from "react-hook-form"
import { InputFieldStyled } from "./style"



interface iInputProps{
    label: string,
    type:string,
    placeholder:string,
    id:string,
    register: UseFormRegisterReturn<string>
}

const Input = ({ label, type, placeholder,id,register}: iInputProps) => {

    return ( 
        <InputFieldStyled>
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder} id={id} {...register}/>
        </InputFieldStyled>
    )
}


export default Input