import { Button } from '../../shared/button/Button';
import { Input } from '../../shared/input/Input';
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
        <Input placeholder="Логин" type="text" onChange={ (e) => console.log(e.target.value) } />
        <Input placeholder="Пароль" type="password" onChange={ (e) => console.log(e.target.value) } />
      </FormAuth>
      <Button text="Войти" type="button" onClick={ (e) => console.log(`Click to ${e.target}`) } />
      <ButtonReg />
    </ContainerAuth>
  </Wrapper>
);
