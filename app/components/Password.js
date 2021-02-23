import { useContext } from 'react';
import { PasswordContext } from './../contexts/PasswordContext';
import { validatePassword } from './../helpers/Validators';
import Input from './Input';

const Password = () => {
  const {
    setPassword,
    isPasswordValid,
    setPasswordValidity
  } = useContext(PasswordContext);

  const handleChange = (text) => {
    setPassword(text);
    setPasswordValidity(validatePassword(text));
  };

  return (
    <Input.Container>
      <Input.Label>senha</Input.Label>
      <Input.Itself 
        error={!isPasswordValid}
        type="password" 
        placeholder="*******" 
        onChange={event => handleChange(event.target.value)}
      />
      { !isPasswordValid && <Input.Error>Digite uma senha;</Input.Error> }
    </Input.Container>
  );
};

export default Password;
