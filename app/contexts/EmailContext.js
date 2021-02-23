import React, { useState, createContext } from 'react';

export const EmailContext = createContext();

const EmailContextProvider = (props) => {
  const [email, setEmail] = useState('');

  return (
    <EmailContext.Provider value={[email, setEmail]}>
      {props.children}
    </EmailContext.Provider>
  );
};

export default EmailContextProvider;
