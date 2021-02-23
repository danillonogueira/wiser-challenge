import styled from 'styled-components';
import include from './../helpers/MediaQueries';
import { EmailContext } from './../contexts/EmailContext';
import { PasswordContext } from './../contexts/PasswordContext';
import { useContext } from 'react';
import { validateEmail, validatePassword, areInputsValid } from './../helpers/Validators';
import login from '../events/Login';

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
  const { email, setEmailValidity } = useContext(EmailContext);
  const { password, setPasswordValidity } = useContext(PasswordContext);

  const checkEmail = (value) => {
    if (!validateEmail(value)) {
      setEmailValidity(false);
    }
  };

  const checkPassword = (value) => {
    if (!validatePassword(value)) {
      setPasswordValidity(false);
    }
  };

  const checkEach = () => {
    checkEmail(email);
    checkPassword(password);
  };
  
  const handleClick = () => {
    if (!areInputsValid({ email, password })) {
      checkEach();
    } else {
      login();
    }
  };

  return <StyledButton onClick={() => handleClick()}>entrar</StyledButton>;
};

export default Button;
