import styled from 'styled-components';

const StyledDescription = styled.span`
  color: #989FDB;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 43px;
  max-width: 222px;
`;

export default function Description({ content }) {
  return <StyledDescription>{content}</StyledDescription> 
}
