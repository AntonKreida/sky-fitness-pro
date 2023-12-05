import { FC, HTMLProps } from 'react';


import * as Styled from './button.styled';


interface IButtonGoProps extends HTMLProps<HTMLButtonElement> {
  text: string;
  type: 'button' | 'reset' | 'submit';
}

export const ButtonGo: FC<IButtonGoProps> = ({ text, type, onClick }) => (
  <Styled.ButtonGo type={ type } onClick={ onClick }>{ text }</Styled.ButtonGo>
);
