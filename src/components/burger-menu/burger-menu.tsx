import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RiArrowDownSLine } from 'react-icons/ri';

import { useAuth, useAppDispatch } from '@hook/';
import { removeUser } from '@redux/';

import * as S from './burger-menu.styled';


export const BurgerMenu = () => {
  const [visible, setVisible] = useState(false);

  const { email } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const handleLogout = () => {
    navigate('/sky-fitness-pro', { replace: true });
    dispatch(removeUser());
  };

  const goToHome = () => {
    navigate('/sky-fitness-pro', { replace: true });
  };

  const goToProfile = () => {
    navigate('/sky-fitness-pro/profile', { replace: true });
  };

  const toggleView = () => {
    setVisible((prev) => !prev);
  };

  return (
    <S.profileHeader>

      <S.userInfo onClick={ toggleView }>
        <S.userImg />
        { pathname === '/sky-fitness-pro'
          ? <S.userEmail>{ email }</S.userEmail>
          : <S.userEmailBlack>{ email }</S.userEmailBlack> }
        { pathname === '/sky-fitness-pro'
          ? <RiArrowDownSLine />
          : <svg fill="black" height="1em" stroke="black" strokeWidth="0" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" /></svg> }

        { visible
          ? (
            <S.userInfoPopUp>
              { pathname === '/sky-fitness-pro'
                ? <S.popUpItem onClick={ goToHome }> На главную </S.popUpItem>
                : <S.popUpItemBlack onClick={ goToHome }> На главную </S.popUpItemBlack> }

              { pathname === '/sky-fitness-pro'
                ? <S.popUpItem onClick={ goToProfile }> Профиль </S.popUpItem>
                : <S.popUpItemBlack onClick={ goToProfile }> Профиль </S.popUpItemBlack> }

              { pathname === '/sky-fitness-pro'
                ? <S.popUpItem onClick={ handleLogout }> Выйти </S.popUpItem>
                : <S.popUpItemBlack onClick={ handleLogout }> Выйти </S.popUpItemBlack> }

            </S.userInfoPopUp>
          )
          : null }
      </S.userInfo>
    </S.profileHeader>
  );
};
