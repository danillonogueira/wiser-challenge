import styled from 'styled-components';

export default function Text({ content, styles }) {
  const StyledText = styled.span`
    color: #383E71;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    ${styles}
  `;

  return <StyledText>{content}</StyledText>;
}
