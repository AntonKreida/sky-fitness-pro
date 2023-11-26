import { FormAuth } from '@components/';
import { ContainerAuth, Wrapper } from '@layouts/';
import { ReactComponent as Logo } from '@assets/images/logoBlack.svg';
import { Input, Button } from '@shared/';


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
