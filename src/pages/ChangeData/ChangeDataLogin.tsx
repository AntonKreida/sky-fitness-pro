import { Wrapper, ContainerChangeData } from '@layouts/';
import { ReactComponent as Logo } from '@assets/images/logoBlack.svg';

import { FormAuth } from '../../components/forms/FormAuth';
import { Button } from '../../shared/button/Button';
import { Input } from '../../shared/input/Input';
import { ChangeDataText } from './ChangeData.styled';


export const ChangeDataLogin = () => (
  <Wrapper>
    <ContainerChangeData>
      <Logo />
      <ChangeDataText>Новый логин:</ChangeDataText>
      <FormAuth>
        <Input placeholder="Логин" type="text" onChange={(e) => console.log(e.target.value)} />
      </FormAuth>
      <Button text="Сохранить" type="button" onClick={() => console.log('Click to save')} />
    </ContainerChangeData>
  </Wrapper>
);
