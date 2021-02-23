import styled from 'styled-components';
import include from './../helpers/MediaQueries';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 117px;

  ${
    include('mobile', `
      min-height: 107px;
    `)
  }
`;
const Itself = styled.input`
  background: #FFF;
  border: solid 1px;
  border-color: ${props => props.error ? '#FF377F' : '#989FDB'};
  border-radius: 8px;
  height: 48px;
  margin-bottom: 8px;
  outline: none;
  padding: 17px;
  width: 100%;

  &, 
  &::placeholder {
    color: #989FDB;
    font-size: 10px;
    line-height: 48px;
  }
`;
const Label = styled.span`
  color: #383E71;
  font-size: 10px;
  line-height: 48px;
  margin-left: 10px;
  text-transform: uppercase;

  ${
    include('mobile', `
      line-height: initial;
      margin-bottom: 8px;
    `)
  }
`;
const Error = styled.span`
  color: #FF377F;
  font-size: 10px;
  margin-left: 10px;
`;
const Input = {
  Container,
  Itself,
  Label,
  Error
};

export default Input;
