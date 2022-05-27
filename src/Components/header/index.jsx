import { StyledHeader } from "./styles"
import { SearchOutlined, RobotFilled  } from "@ant-design/icons"

const Header = () => {
  return ( 
    <StyledHeader>
      <h1>
        <img src="/Captura de tela de 2022-05-27 16-49-50.png" alt="" />
        <a href="#" title="Reparando computadores com um sorriso">Mr. Lion</a>
      </h1>

      <form>
        <input type="text" name="Digite a sua pesquisa..."/>
        <button><SearchOutlined /></button>
      </form>
    </StyledHeader>
   )
}
 
export default Header