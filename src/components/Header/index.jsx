import {BuscarInputContainer, Container, Input, LogoImage,
    Menu, MenuRight, Row, UserPicture, Wrapper} from './styles';
import {Button} from '../Button';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_tituntech.png'

const Header = ({autenticado,home}) => {
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }
    const handleClickSignUp = () => {
        navigate('/cadastro')
    }  
    const handleClickHome = () => {
        navigate('/')
    }
  return (
    <Wrapper>
        <Container>
            <Row>
                <LogoImage src={logo} alt="Logo da TitunTech" />
                {autenticado ? (<>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Desenvolvimento</Menu>
                    <Menu>Fotografia</Menu>
                </>) : null}
            </Row>
            <Row>
                {autenticado ? (<>
                        <Button onClick={handleClickHome} title="Início" />
                        <UserPicture src="https://avatars.githubusercontent.com/u/173863078?v=4" /> </>
                ) : (<> 
                        {home ? null : <Button onClick={handleClickHome} title="Início" />}
                        <Button onClick={handleClickSignIn} title="Entrar" />
                        <Button onClick={handleClickSignUp} title="Cadastrar" /> </>
                )}
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}
