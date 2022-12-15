import { ButtonStyled } from "./style"


interface iButtonProps{
    children: React.ReactNode,
    color: string,
    click?: ()=> void 
}

const Button = ( { children,color,click }: iButtonProps ) => {


    return (
        <ButtonStyled colorBg={color} onClick={click}>
           { children }
        </ButtonStyled>
    )
}


export default Button