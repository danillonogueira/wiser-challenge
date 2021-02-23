import Input from './Input';
import { EmailContext } from './../contexts/EmailContext';
import { useContext } from 'react';

const Email = () => {
  const [ email, setEmail ] = useContext(EmailContext);

  return <Input 
    label={'E-MAIL'} 
    type={'email'} 
    placeholder={'user.name@mail.com'}
    error={'Digite um email válido;'}
    handler={setEmail}
  />;
};

export default Email;
