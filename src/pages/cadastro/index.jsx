import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import {Input} from '../../components/Input';
import {api} from '../../services/api';
import { Column, Container, CriarText, AvisoText, Row, SubTitleLogin, Title, TitleLogin, Wrapper, LoginText } from './styles';

const schema = yup.object({
    nome: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Este endereço não é válido.').required('Campo obrigatório'),
    password: yup.string().min(6, 'No mínimo 6 caracteres.').required('Campo obrigatório'),
}).required();

const Cadastro = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    const onSubmit = async formData =>{
        try {
            const {data: users} = await api.get('/users');
            const userAlreadyExists = users.some(user => user.email === formData.email);

            if (userAlreadyExists) {
                alert('Este email ja esta cadastrado.');
                return;
            }

            const nextId = users.length > 0
                ? Math.max(...users.map(user => Number(user.id) || 0)) + 1
                : 1;

            await api.post('/users', {
                id: nextId,
                name: formData.nome,
                email: formData.email,
                senha: formData.password,
            });

            alert('Cadastro realizado com sucesso!');
            navigate('/login');
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    };
    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                    Aqui você encontrará as tecnologias atuais que resolverão as demandas necessárias da sua empresa 
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Preencha seu cadastro</TitleLogin>
                    <SubTitleLogin>Crie a sua conta</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="nome" errorMessage={errors.nome?.message} control={control} placeholder="nome completo" leftIcon={<MdPerson />}/>
                        <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="email" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="senha" type="password" leftIcon={<MdLock />} />
                        <br />
                        <Button title="Criar conta" variant="secondary" type="submit"/>
                    </form>
                    <Column>
                        <AvisoText>Ao clicar em "Criar conta", declaro que aceito as Políticas
                                    de Privacidade segundo a LGPD.</AvisoText>
                        <Row>
                            <LoginText>Já tenho conta. </LoginText>
                            <Link to="/login"><CriarText>Fazer login</CriarText></Link>
                        </Row>
                        
                    </Column>
                </Wrapper>
               
            </Column>
        </Container>
        </>
    )
}
export {Cadastro}
