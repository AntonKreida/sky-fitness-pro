import { useState } from 'react';

import { Container } from '@layouts/';
import { Button, ButtonGo } from '@shared/';
import cardStepAerobic from '@assets/images/card-aerobics.png';
import cardYoga from '@assets/images/card-yoga.png';
import cardStretching from '@assets/images/card-stretching.png';
import cardBodyFlex from '@assets/images/card-body-flex.png';
import cardDanceFitness from '@assets/images/card-dancing-fit.png';
import { ICourse } from '@/interface';

import { useAppSelector } from '../../hooks/api';
import { useGetAllCoursesQuery } from '../../redux/course-api/courses-api';
import { SelectWorkout } from '../../components/select-workout/select-workout';
import * as Styled from './profile.styled';


export const Profile = () => {
  const { data } = useGetAllCoursesQuery(5);
  const userName = useAppSelector((store) => store.user);
  const allCourses: ICourse[] = [];

  const [open, setOpen] = useState<boolean>(false);

  if (data) {
    const keys = Object.keys(data);
    keys.forEach((key: any) => allCourses.push(data[key]));
  }

  const bannerName = {
    Стретчинг: cardStretching,
    Бодифлекс: cardBodyFlex,
    Йога: cardYoga,
    'Танцевальный фитнес': cardDanceFitness,
    'Степ-аэробика': cardStepAerobic,
  };

  const openMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Container>
      <Styled.Profile>
        <Styled.ProfileTitle>Мой профиль</Styled.ProfileTitle>
        <Styled.ProfileInfo>
          <Styled.ProfileText>Ваш логин: {userName.email}</Styled.ProfileText>
        </Styled.ProfileInfo>
        <Styled.ProfileButtons>
          <Button text="Редактировать логин" type="button" onClick={() => console.log('Click change login')} />
          <Button text="Редактировать пароль" type="button" onClick={() => console.log('Click change password')} />
        </Styled.ProfileButtons>
      </Styled.Profile>
      <Styled.ProfileCourses>
        <Styled.ProfileTitle>Мои курсы</Styled.ProfileTitle>
        <Styled.ProfileCoursesList>
          {allCourses?.map(({ _id, nameRU }) => (
            <Styled.ProfileCourseItem key={String(_id)}>
              <Styled.ProfileCourseItemTitle>{nameRU}</Styled.ProfileCourseItemTitle>
              { /* @ts-ignore lalalla */}
              <Styled.ProfileCourseItemImg alt="Card" src={`${bannerName[nameRU]}`} />
              <Styled.ProfileCourseItemButton>
                <ButtonGo text="Перейти →" type="button" onClick={openMenu} />
              </Styled.ProfileCourseItemButton>
            </Styled.ProfileCourseItem>
          ))}
          {open
            ? <SelectWorkout setOpen={setOpen} />
            : null}
        </Styled.ProfileCoursesList>
      </Styled.ProfileCourses>
    </Container>
  );
};
