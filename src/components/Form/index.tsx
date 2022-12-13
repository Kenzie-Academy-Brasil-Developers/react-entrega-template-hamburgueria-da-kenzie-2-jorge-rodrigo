import { FormStyled } from "./style";



interface iFormsProps{
    children: React.ReactNode;
    sub: (data : any) => void
}

const Form = ({ children, sub }: iFormsProps)=> {


    return (
        <FormStyled onSubmit={sub}>
           {children}
        </FormStyled>
    )
}


export default Form