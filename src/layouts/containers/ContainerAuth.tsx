import { FC, ReactNode } from 'react';

import * as S from './container.styled';


interface IContainerAuth {
  children: ReactNode;
}

export const ContainerAuth: FC<IContainerAuth> = ({ children }) => (
  <S.ContainerAuth>{ children }</S.ContainerAuth>
);
