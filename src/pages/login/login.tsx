import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  getAuth, signInWithEmailAndPassword
} from 'firebase/auth';

import { Button } from '@shared/';
import { FormAuth } from '@components/';
import { ContainerAuth } from '@layouts/';
import { ReactComponent as Logo } from '@assets/images/logo-black.svg';

import { Input } from '../../shared/input/input';
import { useAppDispatch } from '../../hooks/api';
import { ButtonReg } from './ui';
import { removeUser, setUser } from '../../redux/user-api/userSlice';
import * as Styled from './login.styled';


export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const auth = getAuth();

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        navigate('/sky-fitness-pro/profile', { replace: true });
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          }),
        );
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleAuth = async () => {
    if (!email) {
      setError('Введите логин');
      return;
    }
    if (!password) {
      setError('Введите пароль');
      return;
    }

    handleLogin();
  };

  const handleLogout = () => {
    navigate('/sky-fitness-pro', { replace: true });
    dispatch(removeUser());
  };

  return (
    <ContainerAuth>
      <NavLink to="/sky-fitness-pro">
        <Logo />
      </NavLink>
      <FormAuth>
        <Input
          placeholder="Логин"
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Input
          placeholder="Пароль"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </FormAuth>
      <Button text="Войти" type="button" onClick={() => handleAuth()} />
      <Button text="Выход" type="button" onClick={() => handleLogout()} />

      <ButtonReg />
      {error && <Styled.LoginError>Произошла ошибка: {error}</Styled.LoginError>}
    </ContainerAuth>
  );
};
