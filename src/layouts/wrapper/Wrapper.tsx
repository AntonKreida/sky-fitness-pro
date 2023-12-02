import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '@assets/images/logoBlack.svg';

import * as S from './Wrapper.styled';


interface IWrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<IWrapperProps> = ({ children }) => (
  <S.Wrapper>
    <S.CourseLogo>
      <NavLink to="/sky-fitness-pro/">
        <Logo />
      </NavLink>
    </S.CourseLogo>
    <S.CourseBtnEnterConteiner>
      <S.CourseBtnEnter type="submit">Войти</S.CourseBtnEnter>
    </S.CourseBtnEnterConteiner>
    {children}
  </S.Wrapper>
);
