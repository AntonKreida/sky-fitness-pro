import { FC, HTMLProps } from 'react';


import * as S from './Button.styled';


interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  text: string;
  type: 'button';
  onClick?: React.MouseEventHandler;
}

export const Button: FC<IButtonProps> = ({ text, type, onClick }) => (
  <S.Button type={ type } onClick={ onClick }>{ text }</S.Button>
);
