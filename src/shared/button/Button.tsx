import { FC, HTMLProps } from 'react';


import * as S from './button.styled';


interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  text: string;
  type: 'button' | 'reset' | 'submit';
}

export const Button: FC<IButtonProps> = ({ text, type, onClick }) => (
  <S.Button type={ type } onClick={ onClick }>{ text }</S.Button>
);
