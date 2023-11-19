import { FormAuth } from '../../components/forms/FormAuth';
import { ContainerAuth } from '../../layouts/containers/ContainerAuth';
import { Wrapper } from '../../layouts/wrapper/Wrapper';
import { ReactComponent as Logo } from '../../assets/images/logoBlack.svg';
import { ButtonReg } from './ui/ButtonToReg';


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
