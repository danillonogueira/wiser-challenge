import Input from './Input';
import { EmailContext } from './../contexts/EmailContext';
import { useContext } from 'react';
import { validateEmail } from './../helpers/Validators';

const Email = () => {
  const { 
    setEmail,
    isEmailValid,
    setEmailValidation
  } = useContext(EmailContext);

  return (
    <Input.Container>
      <Input.Label>e-mail</Input.Label>
      <Input.Itself
        error={!isEmailValid}
        type="text" 
        placeholder="user.name@mail.com"
        onChange={(event) => {
          const value = event.target.value;

          setEmail(value);
          setEmailValidation(validateEmail(value));
        }}
      />
      { !isEmailValid && <Input.Error>Digite um email válido;</Input.Error> }
    </Input.Container>
  );
};

export default Email;
