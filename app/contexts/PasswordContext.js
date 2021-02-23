import { useState, createContext } from 'react';

export const PasswordContext = createContext();

const PasswordContextProvider = (props) => {
  const [password, setPassword] = useState('');

  return (
    <PasswordContext.Provider value={[password, setPassword]}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordContextProvider;
