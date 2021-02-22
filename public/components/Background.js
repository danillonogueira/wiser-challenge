import styled from 'styled-components';
import Image from 'next/image';

const StyledBackground = styled.div`
  height: 386px;
  position: relative;
  width: 100%;
`;
const StyledImage = styled(Image)`
  z-index: 2;
`;
const Mask = styled.div`
  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  height: 100%;
  position: absolute;
  top: 0;
  transform: rotate(-180deg);
  width: 100%;
  z-index: 3;
`;

export default function Background() {
  return (
    <StyledBackground>
      <StyledImage
        src="/assets/background.png"
        alt="Woman studying English on a laptop"
        layout='fill'
        quality={100}
      />
      <Mask />
    </StyledBackground>
  );
}
