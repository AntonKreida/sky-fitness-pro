import { Wrapper } from '../../layouts/wrapper/Wrapper';
import { ContainerChangeData } from '../../layouts/containers/ContainerChangeData';
import { ReactComponent as Logo } from '../../assets/images/logoBlack.svg';
import { FormAuth } from '../../components/forms/FormAuth';
import { Input } from '../../shared/input/Input';
import { Button } from '../../shared/button/Button';
import { ChangeDataText } from './ChangeData.styled';


export const ChangeDataPassword = () => (
  <Wrapper>
    <ContainerChangeData>
      <Logo />
      <ChangeDataText>Новый пароль:</ChangeDataText>
      <FormAuth>
        <Input placeholder="Пароль" type="password" onChange={ (e) => console.log(e.target.value) } />
        <Input placeholder="Повторите пароль" type="password" onChange={ (e) => console.log(e.target.value) } />
      </FormAuth>
      <Button text="Сохранить" type="button" onClick={ () => console.log('Click to save') } />
    </ContainerChangeData>
  </Wrapper>
);
