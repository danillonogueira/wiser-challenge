import styled from 'styled-components';

const StyledPassswordRecovery = styled.span`
  color: #989FDB;
  text-align: center;
`;

export default function PassswordRecovery({ content }) {
  return <StyledPassswordRecovery>{content}</StyledPassswordRecovery>;
}
