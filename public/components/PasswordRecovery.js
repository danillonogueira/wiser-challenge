import styled from 'styled-components';
import include from './../helpers/MediaQueries';

const StyledPassswordRecovery = styled.span`
  color: #989FDB;
  font-size: 14px;
  text-align: center;
  width: 257px;

  ${
    include('mobile', `
      color: #FFF;
      transform: translateY(47px);
    `)
  }
`;
const Link = styled.a`
  color: #9D25B0;
  text-decoration: underline;

  ${
    include('mobile', `
      color: #FFF;
    `)
  }
`;

export default function PassswordRecovery({ url }) {
  return (
    <StyledPassswordRecovery>
      Esqueceu seu login ou senha? <br/> Clique <Link href={url}>aqui</Link>
    </StyledPassswordRecovery>
  );
}
