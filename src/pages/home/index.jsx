import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, TextContent, Title, TitleHighlight } from './styles';
import figura from '../../assets/favicon.ico';

const Home = () => {
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }
    return (
        <>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente <br />
                    </TitleHighlight>
                    o seu futuro digital agora!
                </Title>
                <TextContent>
                    Ajudamos a construir o seu portfólio de fotos digitais e também desenvolvemos
                    soluções de TI com IA para web sites, sistemas digitais e celulares 
                </TextContent>
                <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn} />
            </div>
            <div>
                <img src={figura} alt="Imagem principal" />
            </div>
        </Container>
        </>
    )
}
export {Home}