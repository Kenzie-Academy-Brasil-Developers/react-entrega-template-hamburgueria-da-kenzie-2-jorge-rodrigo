

interface iInputProps{
    label: string,
    type:string,
    placeholder:string,
    id:string,
    register?: () => void
}

const Input = ({ label, type, placeholder,id,register}: iInputProps) => {

    return ( 
        <fieldset>
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder} id={id} {...register}/>
        </fieldset>
    )
}


export default Input