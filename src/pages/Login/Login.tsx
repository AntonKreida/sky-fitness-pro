import { Button, Input } from '@shared/';
import { FormAuth } from '@components/';
import { ContainerAuth, Wrapper } from '@layouts/';
import { ReactComponent as Logo } from '@assets/images/logo-black.svg';

import { ButtonReg } from './ui';


export const Login = () => (
  <Wrapper>
    <ContainerAuth>
      <Logo />
      <FormAuth>
        <Input placeholder="Логин" type="text" onChange={ (e) => console.log(e.target.value) } />
        <Input placeholder="Пароль" type="password" onChange={ (e) => console.log(e.target.value) } />
      </FormAuth>
      <Button text="Войти" type="button" onClick={ (e) => console.log(`Click to ${e.target}`) } />
      <ButtonReg />
    </ContainerAuth>
  </Wrapper>
);
