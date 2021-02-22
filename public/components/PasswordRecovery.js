import styled from 'styled-components';

const StyledPassswordRecovery = styled.span`
  color: #989FDB;
  font-size: 14px;
  text-align: center;
`;
const Link = styled.a`
  color: #9D25B0;
  text-decoration: underline;
`;

export default function PassswordRecovery({ url }) {
  return (
    <StyledPassswordRecovery>
      Esqueceu seu login ou senha?
      Clique <Link href={url}>aqui</Link>
    </StyledPassswordRecovery>
  );
}
