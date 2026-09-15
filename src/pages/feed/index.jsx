import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, Column, Title, TitleHighlight } from './styles'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

const Feed = () => {
    return (
        <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># 5 maiores da semana</TitleHighlight>
                <UserInfo percentual={90} nome="Marcel Dupret" image="https://avatars.githubusercontent.com/u/173863078?v=4" />
                <UserInfo percentual={85} nome="Marcel Dupret" image="https://avatars.githubusercontent.com/u/173863078?v=4" />
                <UserInfo percentual={80} nome="Marcel Dupret" image="https://avatars.githubusercontent.com/u/173863078?v=4" />
                <UserInfo percentual={78} nome="Marcel Dupret" image="https://avatars.githubusercontent.com/u/173863078?v=4" />
                <UserInfo percentual={75} nome="Marcel Dupret" image="https://avatars.githubusercontent.com/u/173863078?v=4" />
            </Column>
            
        </Container>
        </>
    )
}
export {Feed}