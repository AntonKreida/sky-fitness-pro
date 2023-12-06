import { ContainerChangeData } from '@layouts/';
import { ReactComponent as Logo } from '@assets/images/logo-black.svg';
import { FormAuth } from '@components/';
import { Button } from '@shared/';

import { Input } from '../../shared/input/input';
import * as Styled from './change.styled';


export const ChangeDataLogin = () => (
  <ContainerChangeData>
    <Logo />
    <Styled.ChangeDataText>Новый логин:</Styled.ChangeDataText>
    <FormAuth>
      <Input placeholder="Логин" type="text" onChange={(e) => console.log(e.target.value)} />
    </FormAuth>
    <Button text="Сохранить" type="button" onClick={() => console.log('Click to save')} />
  </ContainerChangeData>
);
