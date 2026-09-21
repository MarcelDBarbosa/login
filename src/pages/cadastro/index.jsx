import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { MdEmail, MdLock, MdPeople, MdPerson } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import {Input} from '../../components/Input';
import {api} from '../../services/api';
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles';

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
export {Cadastro}