import { ReactComponent as Logo } from '@assets/images/logo-black.svg';
import { FormAuth } from '@components/';
import { ContainerChangeData, Wrapper } from '@layouts/';
import { Button, Input } from '@shared/';

import * as Styled from './change.styled';


export const ChangeDataPassword = () => (
  <Wrapper>
    <ContainerChangeData>
      <Logo />
      <Styled.ChangeDataText>Новый пароль:</Styled.ChangeDataText>
      <FormAuth>
        <Input placeholder="Пароль" type="password" onChange={ (e) => console.log(e.target.value) } />
        <Input placeholder="Повторите пароль" type="password" onChange={ (e) => console.log(e.target.value) } />
      </FormAuth>
      <Button text="Сохранить" type="button" onClick={ () => console.log('Click to save') } />
    </ContainerChangeData>
  </Wrapper>
);
