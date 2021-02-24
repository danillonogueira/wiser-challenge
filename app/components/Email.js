import Input from './Input';
import { EmailContext } from './../contexts/EmailContext';
import { useContext } from 'react';
import { validateEmail } from './../helpers/Validators';

const Email = () => {
  const {
    email,
    setEmail,
    isEmailValid,
    setEmailValidity
  } = useContext(EmailContext);

  return (
    <Input.Container>
      <Input.Label>e-mail</Input.Label>
      <Input.Itself
        error={!isEmailValid}
        type="text" 
        placeholder="user.name@mail.com"
        onChange={event => setEmail(event.target.value)}
        onBlur={() => setEmailValidity(validateEmail(email))}
        value={email}
      />
      { !isEmailValid && <Input.Error>Digite um email válido;</Input.Error> }
    </Input.Container>
  );
};

export default Email;
