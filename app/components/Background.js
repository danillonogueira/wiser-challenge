import styled from 'styled-components';
import include from './../helpers/MediaQueries';
import img from './../../public/assets/background.png'

const StyledBackground = styled.div`
  background: url(${img});
  background-size: cover;
  height: 100%;
  position: relative;
  width: 100%;

  ${
    include('desktop', `
      background-position: center;
    `)
  }

  ${
    include('mobile', `
      background-position: top;
      background-repeat: no-repeat;
      background-size: contain;
    `)
  }
`;
const Mask = styled.div`
  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  height: 100%;
  position: absolute;
  top: 0;
  transform: rotate(-180deg);
  width: 100%;

  ${
    include('mobile', `
      background: linear-gradient(180deg, #130525 60%, rgba(105, 57, 153, 0));
    `)
  }
`;
const Background = () => {
  return (
    <StyledBackground>
      <Mask />
    </StyledBackground>
  );
};

export default Background;
