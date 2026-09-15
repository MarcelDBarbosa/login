import {BuscarInputContainer, Column, Container, Input, LogoImage,
    Menu, MenuRight, Row, UserPicture, Wrapper} from './styles';
import {Button} from '../Button';
import logo from '../../assets/favicon.ico'

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <LogoImage src={logo} alt="Logo da TitunTech" />
                {autenticado ? (<>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>) : null}
            </Row>
            <Row>
                {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/173863078?v=4" />
                ) : (<>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" /> </>
                )}
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}
