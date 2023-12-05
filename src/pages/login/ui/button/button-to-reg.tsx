import { useNavigate } from 'react-router-dom';

import * as Styled from './button-to-reg.styled';


export const ButtonReg = () => {
  const navigate = useNavigate();

  return (
    <Styled.ButtonToReg type="button" onClick={ () => navigate('/sky-fitness-pro/register') }>
      Зарегистрироваться
    </Styled.ButtonToReg>
  );
};
