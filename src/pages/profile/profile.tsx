import { useNavigate } from 'react-router-dom';

import { Container } from '@layouts/';
import { Button, ButtonGo } from '@shared/';
import { getStateUser } from '@redux/';
import { useAppSelector } from '@/hooks/api';

import * as Styled from './profile.styled';
import * as Mock from './lib/mock-data';


export const Profile = () => {
  const navigate = useNavigate();
  const { email } = useAppSelector(getStateUser);

  return (
    <Container>
      <Styled.Profile>
        <Styled.ProfileTitle>Мой профиль</Styled.ProfileTitle>
        <Styled.ProfileInfo>
          <Styled.ProfileText>Логин: { email }</Styled.ProfileText>
        </Styled.ProfileInfo>
        <Styled.ProfileButtons>
          <Button text="Редактировать логин" type="button" onClick={ () => navigate('/sky-fitness-pro/change-data-login', { replace: true }) } />
          <Button text="Сбросить пароль" type="button" onClick={ () => navigate('/sky-fitness-pro/change-data-password', { replace: true }) } />
        </Styled.ProfileButtons>
      </Styled.Profile>
      <Styled.ProfileCourses>
        <Styled.ProfileTitle>Мои курсы</Styled.ProfileTitle>
        <Styled.ProfileCoursesList>
          { Mock.COURSES.map(({ id, name, img }) => (
            <Styled.ProfileCourseItem key={ String(id) }>
              <Styled.ProfileCourseItemTitle>{ name }</Styled.ProfileCourseItemTitle>
              <Styled.ProfileCourseItemImg alt="Card" src={ img } />
              <Styled.ProfileCourseItemButton>
                <ButtonGo text="Перейти →" type="button" onClick={ () => console.log('Click to button-go') } />
              </Styled.ProfileCourseItemButton>
            </Styled.ProfileCourseItem>
          )) }
        </Styled.ProfileCoursesList>
      </Styled.ProfileCourses>
    </Container>
  );
};
