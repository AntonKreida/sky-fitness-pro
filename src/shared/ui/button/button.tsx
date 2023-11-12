import { HTMLProps, FC } from 'react';

import * as Styled from './button.styled';


interface IButtonProps extends HTMLProps<HTMLButtonElement>{
  text: string;
  type?: 'button' | 'reset' | 'submit';
}


export const Button: FC<IButtonProps> = ({ text, onClick, type = 'button' }) => (
  <Styled.ButtonWrapper type={ type } onClick={ onClick }>
    { text }
  </Styled.ButtonWrapper>
);
