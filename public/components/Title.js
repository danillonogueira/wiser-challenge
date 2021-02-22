import styled from 'styled-components';
import include from './../helpers/MediaQueries';

const StyledTitle = styled.span`
  color: #383E71;
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 16px;
  max-width: 231px; 

  ${
    include('mobile', `
      font-size: 24px;
      line-height: 32px;
      max-width: 139px;
      margin: 0 auto 16px;
      text-align: center;
    `)
  }
`;

export default function Title({ content }) {
  return <StyledTitle>{content}</StyledTitle>;
}
