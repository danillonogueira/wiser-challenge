import React from 'react';
import GlobalStyles from './../helpers/GlobalStyles';
import Cover from './../components/Cover';
import styled from 'styled-components';

const StyledHome = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export default function Home() {
  return (
    <StyledHome>
      <GlobalStyles />
      <Cover />
    </StyledHome>
  );
}

