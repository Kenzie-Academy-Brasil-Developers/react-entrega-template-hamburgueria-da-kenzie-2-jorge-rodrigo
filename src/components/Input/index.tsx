import { UseFormRegisterReturn } from "react-hook-form"
import { InputFieldStyled } from "./style"



interface iInputProps{
    label?: string,
    type:string,
    placeholder:string,
    id:string,
    register: UseFormRegisterReturn<string>,
    disable?: boolean
}

const Input = ({ label, type, placeholder,id,register, disable}: iInputProps) => {

    return ( 
        <InputFieldStyled>
            {label && <label htmlFor={id}>{label}</label>}
            <input type={type} placeholder={placeholder} id={id} {...register} disabled={disable}/>
        </InputFieldStyled>
    )
}


export default Input