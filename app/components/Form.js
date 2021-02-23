import styled from 'styled-components';
import Button from './Button';
import Title from './Title';
import Description from './Description';
import PassswordRecovery from './PasswordRecovery';
import include from './../helpers/MediaQueries';
import Email from './Email';
import Password from './Password';

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
const Form = () => {
  return (
    <StyledForm>
      <FormContent>
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
