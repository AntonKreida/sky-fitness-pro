import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../redux/user-api/userSlice';
import { useAppDispatch } from '../../hooks/api';
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

      <S.userInfo onClick={toggleView}>
        <S.userImg />
        {pathname === '/sky-fitness-pro'
          ? <S.userEmail>{email}</S.userEmail>
          : <S.userEmailBlack>{email}</S.userEmailBlack>}

        <S.svg
          fill="none"
          height="9"
          viewBox="0 0 14 9"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308"
            strokeWidth="2"
          />
        </S.svg>
        {visible
          ? (
            <S.userInfoPopUp>
              {pathname === '/sky-fitness-pro'
                ? <S.popUpItem onClick={goToHome}> На главную </S.popUpItem>
                : <S.popUpItemBlack onClick={goToHome}> На главную </S.popUpItemBlack>}

              {pathname === '/sky-fitness-pro'
                ? <S.popUpItem onClick={goToProfile}> Профиль </S.popUpItem>
                : <S.popUpItemBlack onClick={goToProfile}> Профиль </S.popUpItemBlack>}

              {pathname === '/sky-fitness-pro'
                ? <S.popUpItem onClick={handleLogout}> Выйти </S.popUpItem>
                : <S.popUpItemBlack onClick={handleLogout}> Выйти </S.popUpItemBlack>}

            </S.userInfoPopUp>
          )
          : null}
      </S.userInfo>


    </S.profileHeader>
  );
};
