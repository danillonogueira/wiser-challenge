import styled from 'styled-components';

const StyledButton = styled.button`
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border: none;
  border-radius: 8px;
  color: #FFF;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  line-height: 20px;
  margin: 24px 0 32px;
  outline: none;
  width: 256px;

  @media(max-width: 482px) {
    margin: 0 auto;
    transform: translateY(50%);
    box-shadow: none;
    width: 168px;
  }
`;

export default function Button({ label }) {
  return <StyledButton>{label}</StyledButton>;
}
