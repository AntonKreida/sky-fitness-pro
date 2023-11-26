import { FC } from 'react';

import { ReactComponent as Logo } from '../../assets/images/logoBlack.svg';
import { ReactComponent as HeaderArrow } from '../../assets/icons/profile-opener.svg';
import * as S from './Header.styled';


interface IHeader {
  name: string;
}

export const Header: FC<IHeader> = ({ name }) => (
  <S.Header>
    <Logo />
    <S.HeaderInfo>
      <S.HeaderInfoAva />
      <S.HeaderInfoName>{ name }</S.HeaderInfoName>
      <div>
        <HeaderArrow />
      </div>
    </S.HeaderInfo>
  </S.Header>
);
