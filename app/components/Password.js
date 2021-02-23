import Input from './Input';

const Password = () => {
  return <Input 
    label={'SENHA'} 
    type={'password'}
    placeholder={'*******'}
    error={'Digite uma senha;'}
  />;
};

export default Password;