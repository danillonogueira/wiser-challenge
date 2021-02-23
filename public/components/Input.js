import styled from 'styled-components';
import include from './../helpers/MediaQueries';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 117px;
`;
const StyledInput = styled.input`
  background: #FFF;
  border: solid 1px;
  border-color: ${props => props.error ? '#FF377F' : '#989FDB'};
  border-radius: 8px;
  height: 48px;
  outline: none;
  padding: 17px;
  width: 100%;

  &, 
  &::placeholder {
    color: #989FDB;
    font-size: 10px;
    line-height: 48px;
  }

  ${
    include('mobile', `
      margin-bottom: 16px;
    `)
  }
`;
const Label = styled.span`
  color: #383E71;
  font-size: 10px;
  line-height: 48px;
  margin-left: 10px;

  ${
    include('mobile', `
      line-height: initial;
      margin-bottom: 8px;
    `)
  }
`;
const Message = styled.span`
  color: #FF377F;
  font-size: 10px;
  margin-top: 8px;
`;
const Input = ({ 
  type, 
  placeholder, 
  label, 
  errorMessage, 
  handler 
}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <StyledInput 
        type={type} 
        placeholder={placeholder}
        onChange={event => handler(event.target.value)}
      />
      {/* <Message>{errorMessage}</Message> */}
    </InputContainer>
  );
};

export default Input;
