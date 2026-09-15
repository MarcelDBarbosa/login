import { FiThumbsUp } from 'react-icons/fi'
import back from '../../assets/programando.jpg'
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src={back}/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/173863078?v=4" />
                    <div>
                        <h4>Marcel Dupret</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto página de login</h4>
                    <p>Construção de página web com React. <strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #React</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }