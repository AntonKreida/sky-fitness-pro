import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { getStateUser } from '@redux/';
import { ButtonHeader } from '@shared/';

import { useAppSelector } from '../../hooks/api';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import * as Styled from './header.styled';


interface IHeaderProps {
  currentLocation?: string;
}

export const Header: FC<IHeaderProps> = ({ currentLocation }) => {
  const navigate = useNavigate();
  const { id, email } = useAppSelector(getStateUser);

  const goToAuth = () => {
    navigate('/sky-fitness-pro/login', { replace: true });
  };

  return (
    <Styled.Header>
      <NavLink to="/sky-fitness-pro">
        { currentLocation === '/sky-fitness-pro' ? <Styled.HomePageLogo /> : <Styled.LogoDefault /> }
      </NavLink>
      <Styled.HeaderInfo>
        { id ? (
          <>
            <Styled.HeaderInfoAva />
            <Styled.HeaderInfoName>{ email }</Styled.HeaderInfoName>
            <Arrow />
          </>
        ) : (<ButtonHeader text="Войти" type="button" onClick={ goToAuth } />) }
      </Styled.HeaderInfo>
    </Styled.Header>
  );
};
