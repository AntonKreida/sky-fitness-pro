import { Container } from '@layouts/';
import { Button, ButtonGo } from '@shared/';

import * as Styled from './profile.styled';
import * as Mock from './lib/mock-data';


export const Profile = () => (
  <Container>
    <Styled.Profile>
      <Styled.ProfileTitle>Мой профиль</Styled.ProfileTitle>
      <Styled.ProfileInfo>
        <Styled.ProfileText>{Mock.LOGIN}</Styled.ProfileText>
        <Styled.ProfileText>{Mock.PASSWORD}</Styled.ProfileText>
      </Styled.ProfileInfo>
      <Styled.ProfileButtons>
        <Button text="Редактировать логин" type="button" onClick={() => console.log('Click change login')} />
        <Button text="Редактировать пароль" type="button" onClick={() => console.log('Click change password')} />
      </Styled.ProfileButtons>
    </Styled.Profile>
    <Styled.ProfileCourses>
      <Styled.ProfileTitle>Мои курсы</Styled.ProfileTitle>
      <Styled.ProfileCoursesList>
        {Mock.COURSES.map(({ id, name, img }) => (
          <Styled.ProfileCourseItem key={String(id)}>
            <Styled.ProfileCourseItemTitle>{name}</Styled.ProfileCourseItemTitle>
            <Styled.ProfileCourseItemImg alt="Card" src={img} />
            <Styled.ProfileCourseItemButton>
              <ButtonGo text="Перейти →" type="button" onClick={() => console.log('Click to button-go')} />
            </Styled.ProfileCourseItemButton>
          </Styled.ProfileCourseItem>
        ))}
      </Styled.ProfileCoursesList>
    </Styled.ProfileCourses>
  </Container>
);
