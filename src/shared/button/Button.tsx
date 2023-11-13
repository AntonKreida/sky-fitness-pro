import { FC, HTMLProps } from 'react';


import * as S from './Button.styled';


interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  text: string;
  onClick?: React.MouseEventHandler;
}

export const Button: FC<IButtonProps> = ({ text, onClick }) => (<S.Button onClick={ onClick }>{ text }</S.Button>);
