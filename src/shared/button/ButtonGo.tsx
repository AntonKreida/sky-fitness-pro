import { FC, HTMLProps } from 'react';


import * as S from './Button.styled';


interface IButtonGoProps extends HTMLProps<HTMLButtonElement> {
  text: string;
  onClick: React.MouseEventHandler;
}

export const ButtonGo: FC<IButtonGoProps> = ({ text, onClick }) => (
  <S.ButtonGo onClick={ onClick }>{ text }</S.ButtonGo>
);
