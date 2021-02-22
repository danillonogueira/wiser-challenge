import styled from 'styled-components';
import Background from './Background';
import include from './../helpers/MediaQueries';

const StyledCover = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ${
    include('mobile', `
      position: absolute;
      z-index: 1;
    `)
  }
`;

export default function Cover() {
  return (
    <StyledCover>
      <Background />
    </StyledCover>
  );
};
