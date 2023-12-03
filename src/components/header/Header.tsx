import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { ButtonHeader } from '@shared/';

import * as S from './header.styled';


interface IHeaderProps {
  currentLocation?: string;
  name?: string;
}

export const Header: FC<IHeaderProps> = ({ currentLocation, name }) => (
  <S.Header>
    <NavLink to="/sky-fitness-pro/">
      { currentLocation === '/sky-fitness-pro/' ? <S.HomePageLogo /> : <S.LogoDefault /> }
    </NavLink>
    <S.HeaderInfo>
      <ButtonHeader text="Войти" type="button" />
    </S.HeaderInfo>
  </S.Header>
);
