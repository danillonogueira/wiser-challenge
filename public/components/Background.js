import styled from 'styled-components';

const StyledBackground = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  background: url('./../assets/background.png');
  background-size: cover;

  @media(max-width: 768px) {
    background-position: center;
  }
`;
const Mask = styled.div`
  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  height: 100%;
  position: absolute;
  top: 0;
  transform: rotate(-180deg);
  width: 100%;
`;

export default function Background() {
  return (
    <StyledBackground>
      <Mask />
    </StyledBackground>
  );
}
