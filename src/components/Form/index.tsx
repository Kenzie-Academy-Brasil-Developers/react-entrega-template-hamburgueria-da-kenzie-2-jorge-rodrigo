


interface iFormsProps{
    children: React.ReactNode;
    sub: () => void
}

const Form = ({ children, sub }: iFormsProps)=> {


    return (
        <form onSubmit={sub}>
           {children}
        </form>
    )
}


export default Form