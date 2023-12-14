import { FC, HTMLProps } from 'react';


import * as Styled from './button.styled';


interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  text: string;
  type: 'button' | 'reset' | 'submit';
}

export const Button: FC<IButtonProps> = ({ text, type, onClick }) => (
  <Styled.Button type={ type } onClick={ onClick }>{ text }</Styled.Button>
);
