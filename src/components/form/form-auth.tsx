import { FC, ReactNode } from 'react';

import * as S from './form.styled';


interface IFormAuth {
  children: ReactNode;
}

export const FormAuth: FC<IFormAuth> = ({ children }) => (
  <S.FormAuth>{ children }</S.FormAuth>
);
