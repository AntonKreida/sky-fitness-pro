import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, verifyBeforeUpdateEmail } from 'firebase/auth';

import { ContainerChangeData } from '@layouts/';
import { ReactComponent as Logo } from '@assets/images/logo-black.svg';
import { FormAuth } from '@components/';
import { Button, Input } from '@shared/';
import { useAppDispatch } from '@/hooks/api';
import { removeUser } from '@redux/';

import * as Styled from './change.styled';


export const ChangeDataLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [newEmail, setNewEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const auth = getAuth();
  const user = auth.currentUser;

  const changeEmail = async () => {
    try {
      if (user) {
        await verifyBeforeUpdateEmail(user, newEmail)
          .then(() => {
            // eslint-disable-next-line no-alert
            alert('На ваш новый email отправлено сообщение. Подтвердите изменения, перейдя по ссылке.');
          });
        dispatch(removeUser());
        navigate('/sky-fitness-pro/login', { replace: true });
      }
    } catch (err) {
      setError(`Ошибка: ${err}`);
    }
  };
  const handleUpdateEmail = () => {
    if (newEmail === '') {
      setError('Введите email');
      return;
    }

    changeEmail();
  };

  return (
    <ContainerChangeData>
      <Logo />
      <Styled.ChangeDataText>Новый адрес почты:</Styled.ChangeDataText>
      <FormAuth>
        <Input placeholder="Почта" type="text" onChange={ (e) => setNewEmail(e.target.value) } />
      </FormAuth>
      <Button text="Сохранить" type="button" onClick={ handleUpdateEmail } />
      { error && <Styled.ChangeDataError>Произошла ошибка: { error }</Styled.ChangeDataError> }
    </ContainerChangeData>
  );
};
