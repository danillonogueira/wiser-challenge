import styled from 'styled-components';

const StyledText = styled.span`
  color: #383E71;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  a {
    color: #9D25B0;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default function Text({ content, styles }) {
  return <StyledText>{content}</StyledText>;
}
