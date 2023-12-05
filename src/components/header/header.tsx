import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { ButtonHeader } from '@shared/';

import * as Styled from './header.styled';


interface IHeaderProps {
  currentLocation?: string;
  name?: string;
}

export const Header: FC<IHeaderProps> = ({ name = 'username', currentLocation }) => (
  <Styled.Header>
    <NavLink to="/sky-fitness-pro/">
      { currentLocation === '/sky-fitness-pro' ? <Styled.HomePageLogo /> : <Styled.LogoDefault /> }
    </NavLink>
    <Styled.HeaderInfo>
      <ButtonHeader text="Войти" type="button" />
    </Styled.HeaderInfo>
  </Styled.Header>
);
