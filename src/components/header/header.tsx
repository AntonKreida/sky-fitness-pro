import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './header.styled';


interface IHeader {
  name?: string;
}

export const Header: FC<IHeader> = ({ name = 'username' }) => (
  <S.Header>
    <NavLink to="/sky-fitness-pro">
      <S.HeaderLogo />
    </NavLink>
    <S.HeaderInfo>
      <S.HeaderInfoAva />
      <S.HeaderInfoName>{ name }</S.HeaderInfoName>
      <S.HeaderArrow />
    </S.HeaderInfo>
  </S.Header>
);
