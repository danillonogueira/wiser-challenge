import styled from 'styled-components';
import Background from './Background';

const StyledCover = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const Mask = styled.div`
  background: #130525;
  height: calc(100% - 386px);
  width: 100%;
`;

export default function Cover() {
  return (
    <StyledCover>
      <Background />
      <Mask />
    </StyledCover>
  );
};
