import Home from './../app/views/Home';
import Head from 'next/head';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="./favicons/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet" />
        <title>Wiser Challenge by Danillo</title>
      </Head>
      <Home />
    </React.Fragment>
  );
};

export default App;
