import styled from 'styled-components';
import Text from './Text';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #989FDB;
  border-radius: 8px;
  height: 48px;
  width: 256px;
  background: #FFF;
  padding: 17px;
  outline: none;

  &, &::placeholder {
    font-size: 10px;
    line-height: 48px;
    color: #989FDB;
  }
`;

export default function Input({ type, placeholder, label }) {
  return (
    <InputContainer>
      <Text 
        content={label}
        styles={`
          font-size: 10px;
          line-height: 48px;
          color: #383E71;
          margin-left: 10px;
        `}
      />
      <StyledInput type={type} placeholder={placeholder} />
    </InputContainer>
  );
};
