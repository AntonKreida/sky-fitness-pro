import { Wrapper, Container } from '@layouts/';
import { Header } from '@components/';
import { Button, ButtonGo } from '@shared/';

import * as S from './Profile.styled';
import * as Mock from './MockData';


export const Profile = () => (
  <Wrapper>
    <Container>
      <Header name={ Mock.USER_NAME } />
      <S.Profile>
        <S.ProfileTitle>Мой профиль</S.ProfileTitle>
        <S.ProfileInfo>
          <S.ProfileText>{ Mock.LOGIN }</S.ProfileText>
          <S.ProfileText>{ Mock.PASSWORD }</S.ProfileText>
        </S.ProfileInfo>
        <S.ProfileButtons>
          <Button text="Редактировать логин" type="button" onClick={ () => console.log('Click change login') } />
          <Button text="Редактировать пароль" type="button" onClick={ () => console.log('Click change password') } />
        </S.ProfileButtons>
      </S.Profile>
      <S.ProfileCourses>
        <S.ProfileTitle>Мои курсы</S.ProfileTitle>
        <S.ProfileCoursesList>
          { Mock.COURSES.map(({ id, name, img }) => (
            <S.ProfileCourseItem key={ String(id) }>
              <S.ProfileCourseItemTitle>{ name }</S.ProfileCourseItemTitle>
              <S.ProfileCourseItemImg alt="Card" src={ img } />
              <S.ProfileCourseItemButton>
                <ButtonGo text="Перейти →" type="button" onClick={ () => console.log('Click to button-go') } />
              </S.ProfileCourseItemButton>
            </S.ProfileCourseItem>
          )) }
        </S.ProfileCoursesList>
      </S.ProfileCourses>
    </Container>
  </Wrapper>
);
