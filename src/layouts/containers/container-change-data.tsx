import { FC, ReactNode } from 'react';

import * as S from './container.styled';


interface IContainerChangeData {
  children: ReactNode;
}

export const ContainerChangeData: FC<IContainerChangeData> = ({ children }) => (
  <S.ContainerChangeData>{ children }</S.ContainerChangeData>
);
