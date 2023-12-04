import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { ButtonHeader } from '@shared/';

import * as S from './header.styled';


interface IHeaderProps {
  currentLocation?: string;
  name?: string;
}

export const Header: FC<IHeaderProps> = ({ currentLocation, name }) => {
  const navigate = useNavigate();

  const goToAuth = () => {
    navigate('/sky-fitness-pro/login', { replace: true });
  };

  return (
    <S.Header>
      <NavLink to="/sky-fitness-pro/">
        { currentLocation === '/sky-fitness-pro/' ? <S.HomePageLogo /> : <S.LogoDefault /> }
      </NavLink>
      <S.HeaderInfo>
        <ButtonHeader text="Войти" type="button" onClick={ goToAuth } />
      </S.HeaderInfo>
    </S.Header>
  );
};
