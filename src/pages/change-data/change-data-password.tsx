import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, updatePassword } from 'firebase/auth';

import { ReactComponent as Logo } from '@assets/images/logo-black.svg';
import { FormAuth } from '@components/';
import { ContainerChangeData } from '@layouts/';
import { Button, Input } from '@shared/';
import { removeUser } from '@redux/';
import { useAppDispatch } from '@/hooks/api';

import * as Styled from './change.styled';


export const ChangeDataPassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const auth = getAuth();
  const user = auth.currentUser;

  const changePassword = async () => {
    try {
      if (user) {
        await updatePassword(user, password)
          .then(() => {
            // eslint-disable-next-line no-alert
            alert('Пароль изменен. Авторизуйтесь ещё раз.');
          });
        dispatch(removeUser());
        navigate('/sky-fitness-pro/login', { replace: true });
      }
    } catch (err) {
      setError(`Ошибка: ${err}`);
    }
  };
  const handleUpdatePassword = () => {
    if (password === '') {
      setError('Введите новый пароль');
      return;
    }

    if (confirmPassword === '') {
      setError('Подтвердите пароль');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    changePassword();
  };

  return (
    <ContainerChangeData>
      <Logo />
      <Styled.ChangeDataText>Новый пароль:</Styled.ChangeDataText>
      <FormAuth>
        <Input placeholder="Пароль" type="password" onChange={ (e) => setPassword(e.target.value) } />
        <Input placeholder="Повторите пароль" type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
      </FormAuth>
      <Button text="Сохранить" type="button" onClick={ handleUpdatePassword } />
      { error && <Styled.ChangeDataError>Произошла ошибка: { error }</Styled.ChangeDataError> }
    </ContainerChangeData>
  );
};
