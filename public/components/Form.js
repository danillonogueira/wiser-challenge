import styled from 'styled-components';
import Text from './Text';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 136px 112px;
`;

export default function Form() {
  return (
    <StyledForm>
      <Text 
        content={[
          'Olá, seja',
          <br />,
          'bem-vindo!'
        ]}
        styles={`
          font-size: 40px;
          line-height: 48px;
          margin-bottom: 16px;
        `}
      />
      <Text
        content= {[
          'Para acessar a plataforma',
          <br />,
          'faça seu login'
        ]}
        styles={`
          font-size: 16px;
          font-weight: 600;
          color: #989FDB;
          margin-bottom: 43px;
        `}
      />
    </StyledForm>
  );
}