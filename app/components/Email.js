import Input from './Input';
import { EmailContext } from './../contexts/EmailContext';
import { useState, useContext } from 'react';
import { isEmailValid } from './../helpers/Validators';

const Email = () => {
  const [ email, setEmail ] = useContext(EmailContext);
  const [ isValid, setValidation ] = useState(true);

  return (
    <Input.Container>
      <Input.Label>e-mail</Input.Label>
      <Input.Itself
        error={!isValid}
        type="text" 
        placeholder="user.name@mail.com"
        onChange={(e) => {
          const value = e.target.value;

          setEmail(value);
          setValidation(isEmailValid(value));
        }}
      />
      { !isValid && <Input.Error>Digite um email válido;</Input.Error> }
    </Input.Container>
  );
};

export default Email;
