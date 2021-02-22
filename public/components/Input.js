import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled.input`
  background: #FFF;
  border: 1px solid #989FDB;
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

  @media(max-width: 482px) {
    margin-bottom: 16px;
  }
`;
const Label = styled.span`
  font-size: 10px;
  line-height: 48px;
  color: #383E71;
  margin-left: 10px;

  @media(max-width: 482px) {
    line-height: initial;
    margin-bottom: 8px;
  }
`;

export default function Input({ type, placeholder, label }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <StyledInput type={type} placeholder={placeholder} />
    </InputContainer>
  );
};
