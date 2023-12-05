import { FC, HTMLProps } from 'react';


import * as S from './Button.styled';


interface IButtonHeaderProps extends HTMLProps<HTMLButtonElement> {
  text: string;
  type: 'button' | 'reset' | 'submit';
}

export const ButtonHeader: FC<IButtonHeaderProps> = ({ text, type, onClick }) => (
  <S.ButtonHeader type={type} onClick={onClick}>{text}</S.ButtonHeader>
);
