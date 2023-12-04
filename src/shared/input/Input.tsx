import { FC, HTMLProps } from 'react';


import * as S from './input.styled';


interface IInputProps extends HTMLProps<HTMLInputElement> {
  type: 'email' | 'password' | 'text';
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<IInputProps> = ({ type, placeholder, onChange }) => (
  <S.Input
    placeholder={ placeholder }
    type={ type }
    onChange={ onChange }
  />
);
