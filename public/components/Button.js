import styled from 'styled-components';
import include from './../helpers/MediaQueries';

const StyledButton = styled.button`
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  border: none;
  border-radius: 8px;
  box-shadow: 0px 10px 25px #CF99DB;
  color: #FFF;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  line-height: 20px;
  margin: 24px 0 32px;
  outline: none;
  text-transform: uppercase;
  width: 256px;

  ${
    include('mobile', `
      box-shadow: none;
      margin: 0 auto;
      transform: translateY(50%);
      width: 168px;
    `)
  }
`;
const Button = () => {
  return <StyledButton>entrar</StyledButton>;
};

export default Button;
