import Input from './Input';
import { EmailContext } from './../contexts/EmailContext';
import { useContext } from 'react';
import { validateEmail } from './../helpers/Validators';
import { debounce } from 'lodash';

const Email = () => {
  const { 
    setEmail,
    isEmailValid,
    setEmailValidation
  } = useContext(EmailContext);

  const handleChange = debounce((text) => {
    setEmail(text);
    setEmailValidation(validateEmail(text));
  }, 250);

  return (
    <Input.Container>
      <Input.Label>e-mail</Input.Label>
      <Input.Itself
        error={!isEmailValid}
        type="text" 
        placeholder="user.name@mail.com"
        onChange={(event) => handleChange(event.target.value)}
      />
      { !isEmailValid && <Input.Error>Digite um email válido;</Input.Error> }
    </Input.Container>
  );
};

export default Email;
