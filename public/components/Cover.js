import styled from 'styled-components';
import Background from './Background';

const StyledCover = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media(max-width: 482px) {
    position: absolute;
    z-index: 1;
  }
`;

export default function Cover() {
  return (
    <StyledCover>
      <Background />
    </StyledCover>
  );
};
