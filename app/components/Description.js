import styled from 'styled-components';
import include from './../helpers/MediaQueries';

const StyledDescription = styled.span`
  color: #989FDB;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 43px;
  max-width: 222px;

  ${
    include('mobile', `
      font-size: 12px;
      line-height: 20px;
      max-width: 255px;
      margin: 0 auto 20px;
    `)
  }
`;
const Description = () => <StyledDescription>Para acessar a plataforma, faça seu login.</StyledDescription>;

export default Description;
