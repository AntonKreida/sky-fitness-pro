import { FormAuth } from '../../components/forms/FormAuth';
import { ContainerAuth } from '../../layouts/containers/ContainerAuth';
import { Wrapper } from '../../layouts/wrapper/Wrapper';
import { ReactComponent as Logo } from '../../assets/images/logoBlack.svg';


export const Register = () => (
  <Wrapper>
    <ContainerAuth>
      <Logo />
      <FormAuth>
        <input className="input" placeholder="Логин" type="text" />
        <input className="input" placeholder="Пароль" type="password" />
        <input className="input" placeholder="Повторите пароль" type="password" />
      </FormAuth>
      <button className="button" type="button">Зарегистрироваться</button>
    </ContainerAuth>
  </Wrapper>
);
