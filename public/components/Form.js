import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import Title from './Title';
import Description from './Description';
import PassswordRecovery from './PasswordRecovery';
import include from './../helpers/MediaQueries';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 136px 0 0 112px;
  width: 100%;

  ${
    include('desktop', `
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
    `)
  }

  ${
    include('mobile', `
      background: #FFF;
      border-radius: 8px;
      padding: 24px 28px 0;
      position: absolute;
      z-index: 2;
      width: auto;
      height: auto;
    `)
  }
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
      </FormContent>
      <PassswordRecovery url={'https://wiseup.com/pt/online'} />
    </StyledForm>
  );
}
