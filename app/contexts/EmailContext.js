import { useState, createContext } from 'react';

export const EmailContext = createContext();

const EmailContextProvider = (props) => {
  const [ email, setEmail ] = useState('');
  const [ isEmailValid, setEmailValidity ] = useState(true);

  return (
    <EmailContext.Provider 
      value={{
        email, 
        setEmail, 
        isEmailValid, 
        setEmailValidity
      }}>
      {props.children}
    </EmailContext.Provider>
  );
};

export default EmailContextProvider;
