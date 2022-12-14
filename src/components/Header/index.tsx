import { LogoStyled } from "../../styles/logo"
import { InfoDivStyled } from "./style"
import Bag from '../../assets/bag.png'

const Header = () =>{

    return (
      <div>
        <LogoStyled>Burguer <span>Kenzie</span></LogoStyled>
        <InfoDivStyled>
           <img src={Bag} alt=""/>
           <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
        </InfoDivStyled>
      </div>
    )
}

export default Header