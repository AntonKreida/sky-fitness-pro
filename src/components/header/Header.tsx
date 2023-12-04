import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { ButtonHeader } from '@shared/';

import * as Styled from './header.styled';


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
    <Styled.Header>
      <NavLink to="/sky-fitness-pro">
        { currentLocation === '/sky-fitness-pro' ? <Styled.HomePageLogo /> : <Styled.LogoDefault /> }
      </NavLink>
      <Styled.HeaderInfo>
        <ButtonHeader text="Войти" type="button" onClick={ goToAuth } />
      </Styled.HeaderInfo>
    </Styled.Header>
  );
};
