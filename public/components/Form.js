import styled from 'styled-components';
import Text from './Text';
import Input from './Input';
import Button from './Button';

const StyledForm = styled.div`
  width: 100%;
  height: 100%;
  padding: 136px 0 0 112px;
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
        <Text 
          content={'Olá, seja bem-vindo!'}
          styles={`
            font-size: 40px;
            line-height: 48px;
            margin-bottom: 16px;
            max-width: 231px;
          `}
        />
        <Text
          content= {'Para acessar a plataforma, faça seu login'}
          styles={`
            font-size: 16px;
            font-weight: 600;
            color: #989FDB;
            margin-bottom: 43px;
            max-width: 222px;
          `}
        />
        <Input 
          type={'text'}
          placeholder={'user.name@mail.com'}
          label={'E-MAIL'}
        />
        <Input 
          type={'password'}
          label={'SENHA'}
        />
        <Button label={'ENTRAR'} />
        <Text
          content={'Esqueceu seu login ou senha? Clique aqui'}
          styles={`
            color: #989FDB;
            text-align: center;
          `}
        />
      </FormContent>
    </StyledForm>
  );
}
