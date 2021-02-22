import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './../helpers/GlobalStyles';
import Cover from './../components/Cover';
import Form from './../components/Form';


const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 56% auto;
  position: fixed;
  width: 100%;
  height: 100%;

  @media(max-width: 768px) {
    grid-template-columns: 35% auto;
  }

  @media(max-width: 482px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Home() {
  return (
    <StyledHome>
      <GlobalStyles />
      <Cover />
      <Form />
      
    </StyledHome>
  );
}

