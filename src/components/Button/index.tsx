import { ButtonStyled } from "./style"


interface iButtonProps{
    children: React.ReactNode,
    color: string,
}

const Button = ( { children,color }: iButtonProps ) => {


    return (
        <ButtonStyled colorBg={color}>
           { children }
        </ButtonStyled>
    )
}


export default Button