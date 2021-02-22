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

