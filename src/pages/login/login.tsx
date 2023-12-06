import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword
} from 'firebase/auth';

import { Button } from '@shared/';
import { FormAuth } from '@components/';
import { ContainerAuth } from '@layouts/';
import { ReactComponent as Logo } from '@assets/images/logo-black.svg';

import { Input } from '../../shared/input/input';
import { useAppDispatch } from '../../hooks/api';
import { ButtonReg } from './ui';
import { removeUser, setUser } from '../../redux/user-api/userSlice';


export const Login = () => {
  const [email, setEmail] = useState<string | null>('');
  const [password, setPassword] = useState<string | null>('');
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const auth = getAuth();

  const getLogin = () => {

  };

  const getPassword = () => {

  };

  const handleAuth = (email = 'marina@mail.ru', password = 'marina@mail.ru') => {
    signInWithEmailAndPassword(auth, email, password)
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

  const handleLogout = () => {
    navigate('/sky-fitness-pro/profile', { replace: true });
    dispatch(removeUser());
  };

  return (
    <ContainerAuth>
      <NavLink to="/sky-fitness-pro">
        <Logo />
      </NavLink>
      <FormAuth>
        <Input placeholder="Логин" type="text" onChange={getLogin} />
        <Input placeholder="Пароль" type="password" onChange={getPassword} />
      </FormAuth>
      { /* <Button text="Войти" type="button" onClick={(e) => console.log(`Click to ${e.target}`)} /> */}
      <Button text="Войти" type="button" onClick={() => handleAuth()} />
      <Button text="Выход" type="button" onClick={() => handleLogout()} />

      <ButtonReg />
      {error && <div>Произошла ошибка: {error}</div>}
    </ContainerAuth>
  );
};
