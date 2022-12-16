import { ButtonStyled } from "./style"


interface iButtonProps{
    children: React.ReactNode,
    color: string,
    click?: ()=> void,
    disable?: boolean
}

const Button = ( { children,color,click,disable }: iButtonProps ) => {


    return (
        <ButtonStyled colorBg={color} onClick={click} disabled={disable}>
           { children }
        </ButtonStyled>
    )
}


export default Button