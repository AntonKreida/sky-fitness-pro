import { ReactComponent as Logo } from '../../assets/images/logoBlack.svg';
import { Wrapper } from '../../layouts/wrapper/Wrapper';
import { ContainerAuth } from '../../layouts/containers/ContainerAuth';
import { FormAuth } from '../../components/forms/FormAuth';
import { Input } from '../../shared/input/Input';
import { Button } from '../../shared/button/Button';


export const Register = () => (
  <Wrapper>
    <ContainerAuth>
      <Logo />
      <FormAuth>
        <Input placeholder="Логин" type="text" onChange={ (e) => console.log(e.target.value) } />
        <Input placeholder="Пароль" type="password" onChange={ (e) => console.log(e.target.value) } />
        <Input placeholder="Повторите пароль" type="password" onChange={ (e) => console.log(e.target.value) } />
      </FormAuth>
      <Button text="Зарегистрироваться" type="button" onClick={ (e) => console.log(`Click to ${e.target}`) } />
    </ContainerAuth>
  </Wrapper>
);
