import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import Title from './Title';
import Description from './Description';
import PassswordRecovery from './PasswordRecovery';
import include from './../helpers/MediaQueries';

const StyledForm = styled.div`
  background: #FAF5FF;
  height: 100%;
  padding: 136px 0 0 112px;
  width: 100%;
  z-index: 2;

  ${
    include('desktop', `
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0;
    `)
  }

  ${
    include('mobile', `
      background: transparent;
    `)
  }
`;
const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 257px;

  ${
    include('mobile', `
      background: #FAF5FF;
      border-radius: 8px;
      padding: 24px 28px 0;
      width: auto;
    `)
  }
`;

export default function Form() {
  return (
    <StyledForm>
      <FormContent>
        <Title content={'Olá, seja bem-vindo!'} />
        <Description content= {'Para acessar a plataforma, faça seu login.'} />
        <Input 
          label={'E-MAIL'} 
          type={'email'} 
          placeholder={'user.name@mail.com'} 
        />
        <Input 
          label={'SENHA'} 
          type={'password'}
          placeholder={'*******'}
        />
        <Button label={'ENTRAR'} />
      </FormContent>
      <PassswordRecovery url={'https://wiseup.com/pt/online'} />
    </StyledForm>
  );
}
