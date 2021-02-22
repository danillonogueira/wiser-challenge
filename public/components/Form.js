import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import Title from './Title';
import Description from './Description';
import PassswordRecovery from './PasswordRecovery';

const StyledForm = styled.div`
  height: 100%;
  padding: 136px 0 0 112px;
  width: 100%;
`;
const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 257px;
`;

export default function Form() {
  return (
    <StyledForm>
      <FormContent>
        <Title content={'Olá, seja bem vindo!'} />
        <Description content= {'Para acessar a plataforma, faça seu login'} />
        <Input 
          label={'E-MAIL'} 
          type={'email'} 
          placeholder={'user.name@mail.com'} 
        />
        <Input 
          label={'SENHA'} 
          type={'password'} 
        />
        <Button label={'ENTRAR'} />
        <PassswordRecovery content={'Esqueceu seu login ou senha? Clique aqui'} />
      </FormContent>
    </StyledForm>
  );
}
