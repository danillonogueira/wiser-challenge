import { useState, createContext } from 'react';

export const PasswordContext = createContext();

const PasswordContextProvider = (props) => {
  const [ password, setPassword ] = useState('');
  const [ isPasswordValid, setPasswordValidation ] = useState(true);

  return (
    <PasswordContext.Provider 
      value={{
        password, 
        setPassword,
        isPasswordValid,
        setPasswordValidation
      }}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordContextProvider;
