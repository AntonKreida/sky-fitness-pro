import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';

import { FormAuth } from '@components/';
import { ContainerAuth } from '@layouts/';
import { ReactComponent as Logo } from '@assets/images/logo-black.svg';
import { Button } from '@shared/';

import { useAppDispatch } from '../../hooks/api';
import { setUser } from '../../redux/user-api/userSlice';
import { Input } from '../../shared/input/input';
import * as Styled from '../login/login.styled';


export const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const auth = getAuth();

  const handleReg = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          navigate('/sky-fitness-pro/profile', { replace: true });
          dispatch(
            setUser({
              email: user.email,
              id: user.uid
            }),
          );
        });
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  };

  const handleRegister = async () => {
    if (!email) {
      setError('Введите почту');
      return;
    }
    if (!password) {
      setError('Введите пароль');
      return;
    }
    if (!repeatPassword) {
      setError('Повторите пароль');
      return;
    }
    if (password !== repeatPassword) {
      setError('Пароли не совпадают');
      return;
    }

    handleReg();
  };

  return (
    <ContainerAuth>
      <NavLink to="/sky-fitness-pro/login">
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
        <Input
          placeholder="Повторите пароль"
          type="password"
          onChange={(event) => {
            setRepeatPassword(event.target.value);
          }}
        />
      </FormAuth>
      <Button text="Зарегистрироваться" type="button" onClick={() => handleRegister()} />
      {error && <Styled.LoginError>Произошла ошибка: {error}</Styled.LoginError>}


    </ContainerAuth>
  );
};
