import { useState, createContext } from 'react';

export const PasswordContext = createContext();

const PasswordContextProvider = (props) => {
  const [ password, setPassword ] = useState('');
  const [ isPasswordValid, setPasswordValidity ] = useState(true);

  return (
    <PasswordContext.Provider 
      value={{
        password, 
        setPassword,
        isPasswordValid,
        setPasswordValidity
      }}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordContextProvider;
