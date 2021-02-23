import Input from './Input';
import { PasswordContext } from './../contexts/PasswordContext';
import { useContext } from 'react';
import { validatePassword } from './../helpers/Validators';

const Password = () => {
  const {
    setPassword,
    isPasswordValid,
    setPasswordValidation
  } = useContext(PasswordContext);

  return (
    <Input.Container>
      <Input.Label>senha</Input.Label>
      <Input.Itself 
        error={!isPasswordValid}
        type="password" 
        placeholder="*******" 
        onChange={(event) => {
          const value = event.target.value;

          setPassword(value);
          setPasswordValidation(validatePassword(value));
        }}
      />
      { !isPasswordValid && <Input.Error>Digite uma senha;</Input.Error> }
    </Input.Container>
  );
};

export default Password;