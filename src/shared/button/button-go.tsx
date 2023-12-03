import { FC, HTMLProps } from 'react';


import * as S from './button.styled';


interface IButtonGoProps extends HTMLProps<HTMLButtonElement> {
  text: string;
  type: 'button' | 'reset' | 'submit';
}

export const ButtonGo: FC<IButtonGoProps> = ({ text, type, onClick }) => (
  <S.ButtonGo type={ type } onClick={ onClick }>{ text }</S.ButtonGo>
);
