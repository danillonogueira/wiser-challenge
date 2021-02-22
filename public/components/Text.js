import styled from 'styled-components';

export default function Text({ content, styles }) {
  const StyledText = styled.span`
    color: #383E71;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    ${styles}

    a {
      color: #9D25B0;
      text-decoration: underline;
      cursor: pointer;
    }
  `;

  return <StyledText>{content}</StyledText>;
}
