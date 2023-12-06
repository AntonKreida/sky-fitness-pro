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


export const Register = () => {
  const [email, setEmail] = useState<string | null>('');
  const [password, setPassword] = useState<string | null>('');
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const auth = getAuth();

  const handleReg = (email = 'marinaz@mail.ru', password = 'marinaz@mail.ru') => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        localStorage.setItem('user', email);
        navigate('/profile', { replace: true });
        dispatch(
          setUser({
            email: user.email,
            id: user.uid
          }),
        );
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <ContainerAuth>
      <NavLink to="/sky-fitness-pro/login">
        <Logo />
      </NavLink>
      <FormAuth>
        <Input placeholder="Логин" type="text" onChange={(e) => console.log(e.target.value)} />
        <Input placeholder="Пароль" type="password" onChange={(e) => console.log(e.target.value)} />
        <Input placeholder="Повторите пароль" type="password" onChange={(e) => console.log(e.target.value)} />
      </FormAuth>
      <Button text="Зарегистрироваться" type="button" onClick={() => handleReg()} />

    </ContainerAuth>
  );
};
