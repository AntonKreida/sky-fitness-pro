import { FC, ReactNode } from 'react';

import * as S from './container.styled';


interface IContainer {
  children: ReactNode;
}

export const Container: FC<IContainer> = ({ children }) => (
  <S.Container>{ children }</S.Container>
);
