import { FC, ReactNode } from 'react';

import * as S from './Container.styled';


interface IContainer {
  children: ReactNode;
}

export const Container: FC<IContainer> = ({ children }) => (
  <S.Container>{ children }</S.Container>
);
