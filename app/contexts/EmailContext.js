import { useState, createContext } from 'react';

export const EmailContext = createContext();

const EmailContextProvider = (props) => {
  const [ email, setEmail ] = useState('');
  const [ isEmailValid, setEmailValidation ] = useState(true);

  return (
    <EmailContext.Provider 
      value={{
        email, 
        setEmail, 
        isEmailValid, 
        setEmailValidation
      }}>
      {props.children}
    </EmailContext.Provider>
  );
};

export default EmailContextProvider;
