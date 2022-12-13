import { LogoStyled } from "../../styles/logo"
import Bag from '../../assets/bag.png'
import { InfoDivStyled, } from "./style"
import Form from "../../components/Form"
import Input from "../../components/Input"


const LoginPage = () => {

  const oi = () => {
    console.log("oi")
  } 

    return (
        <>
          <LogoStyled>Burguer <span>Kenzie</span></LogoStyled>
          <InfoDivStyled>
             <img src={Bag} alt=""/>
             <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
          </InfoDivStyled>
          <div>
            <h2>Login</h2>
            <Form sub={oi}>
              <Input type={"text"} label={"login"} placeholder={"Digite seu login"} id={"login"}/>
              <button>Enviar</button>
            </Form>
          </div>
        </>
    )
}

export default LoginPage