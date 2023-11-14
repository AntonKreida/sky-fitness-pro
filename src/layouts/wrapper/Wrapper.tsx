import { FC, ReactNode } from 'react';

import * as S from './Wrapper.styled';


interface IWrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<IWrapperProps> = ({ children }) => (
  <S.Wrapper>{ children }</S.Wrapper>
);
