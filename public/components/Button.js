import styled from 'styled-components';
import Text from './Text';

const StyledButton = styled.button`
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border-radius: 8px;
  color: #FFF;
  width: 256px;
  height: 48px;
  cursor: pointer;
  border: none;
  margin: 24px 0 32px;
  outline: none;
`;

export default function Button({ label }) {
  return (
    <StyledButton>
      <Text 
        content={label}
        styles={`
          font-weight: 600;
          font-size: 16px;
          color: #FFF;
        `}
        key={label}
      />
    </StyledButton>
  );
}
