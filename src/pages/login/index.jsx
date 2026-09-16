import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import {Input} from '../../components/Input';
import {api} from '../../services/api';
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email('Este endereço não é válido.').required('Campo obrigatório'),
    password: yup.string().min(6, 'No mínimo 6 caracteres.').required('Campo obrigatório'),
}).required();

const Login = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    const onSubmit = async formData =>{
        try {
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1){
                navigate('/feed') 
            }else{
                alert('Email ou senha inválido')
            }
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
                    Ajudamos a construir o seu portfólio de fotos digitais e também desenvolvemos
                    soluções de TI com IA para web sites, sistemas digitais e celulares 
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="email" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="senha" type="password" leftIcon={<MdLock />} />
                        <br />
                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
               
            </Column>
        </Container>
        </>
    )
}
export {Login}