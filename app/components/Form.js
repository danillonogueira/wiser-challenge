import styled from 'styled-components';
import include from './../helpers/MediaQueries';
import Title from './Title';
import Description from './Description';
import Email from './Email';
import Password from './Password';
import Button from './Button';
import PassswordRecovery from './PasswordRecovery';
import { EmailContext } from './../contexts/EmailContext';
import { PasswordContext } from './../contexts/PasswordContext';
import { useContext } from 'react';
import { validateEmail, validatePassword, areInputsValid } from './../helpers/Validators';
import login from '../events/Login';

const StyledForm = styled.div`
  background: #FAF5FF;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 136px 0 0 112px;
  width: 100%;
  z-index: 2;

  ${
    include('desktop', `
      align-items: center;
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
const FormContent = styled.form`
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
const Form = () => {
  const { 
    email, 
    setEmail, 
    setEmailValidity 
  } = useContext(EmailContext);
  const { 
    password, 
    setPassword, 
    setPasswordValidity 
  } = useContext(PasswordContext);

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

  const cleanUp = () => {
    setEmail('');
    setPassword('');
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!areInputsValid({ email, password })) {
      checkEach();
    } else {
      login(cleanUp);
    }
  };

  return (
    <StyledForm>
      <FormContent onSubmit={event => handleSubmit(event)}>
        <Title />
        <Description />
        <Email />
        <Password />
        <Button />
      </FormContent>
      <PassswordRecovery />
    </StyledForm>
  );
};

export default Form;
