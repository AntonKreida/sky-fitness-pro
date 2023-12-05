import { useNavigate } from 'react-router-dom';

import * as S from './ButtonToReg.styled';


export const ButtonReg = () => {
  const navigate = useNavigate();

  return (
    <S.ButtonToReg type="button" onClick={ () => navigate('/sky-fitness-pro/register') }>
      Зарегистрироваться
    </S.ButtonToReg>
  );
};
