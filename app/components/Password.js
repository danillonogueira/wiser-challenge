import Input from './Input';
import { PasswordContext } from './../contexts/PasswordContext';
import { useContext, useState } from 'react';
import { isPasswordValid } from './../helpers/Validators';

const Password = () => {
  const [ password, setPassword ] = useContext(PasswordContext);
  const [ isValid, setValidation ] = useState(true);

  return (
    <Input.Container>
      <Input.Label>senha</Input.Label>
      <Input.Itself 
        error={!isValid}
        type="password" 
        placeholder="*******" 
        onChange={(e) => {
          const value = e.target.value;

          setPassword(value);
          setValidation(isPasswordValid(value));
        }}
      />
      { !isValid && <Input.Error>Digite uma senha;</Input.Error> }
    </Input.Container>
  );
};

export default Password;