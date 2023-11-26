import { Wrapper } from '@/layouts/wrapper';
import { ContainerChangeData } from '@/layouts/containers';
import { ReactComponent as Logo } from '@/assets/images/logoBlack.svg';
import { FormAuth } from '@/components/forms';
import { Input } from '@/shared/input';
import { Button } from '@/shared/button';

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
