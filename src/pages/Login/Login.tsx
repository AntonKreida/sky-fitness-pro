import { Wrapper } from '@/layouts/wrapper';
import { ContainerAuth } from '@/layouts/containers';
import { FormAuth } from '@/components/forms';
import { ReactComponent as Logo } from '@/assets/images/logoBlack.svg';

import { ButtonReg } from './ui';


export const Login = () => (
  <Wrapper>
    <ContainerAuth>
      <Logo />
      <FormAuth>
        <input className="input" placeholder="Логин" type="text" />
        <input className="input" placeholder="Пароль" type="password" />
      </FormAuth>
      <button type="button">Войти</button>
      <ButtonReg />
    </ContainerAuth>
  </Wrapper>
);
