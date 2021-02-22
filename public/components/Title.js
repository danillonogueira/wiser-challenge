import styled from 'styled-components';

const StyledTitle = styled.span`
  color: #383E71;
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 16px;
  max-width: 231px;
`;

export default function Title({ content }) {
  return <StyledTitle>{content}</StyledTitle>;
}
