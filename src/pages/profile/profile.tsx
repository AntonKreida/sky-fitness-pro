import { useState } from 'react';

import { Button, ButtonGo } from '@shared/';
import cardStepAerobic from '@assets/images/card-aerobics.png';
import cardYoga from '@assets/images/card-yoga.png';
import cardStretching from '@assets/images/card-stretching.png';
import cardBodyFlex from '@assets/images/card-body-flex.png';
import cardDanceFitness from '@assets/images/card-dancing-fit.png';
import { useAppSelector } from '@hook/';
import { SelectWorkout } from '@components/';

import { useGetAllAddedCoursesQuery } from '../../redux/course-api/courses-api';
import * as Styled from './profile.styled';


interface AddedCourse {
  name: string;
  workouts: string[];
}

export const Profile = () => {
  const userName = useAppSelector((store) => store.user);
  const allCourses: AddedCourse[] = [];

  // @ts-ignore later
  const { data } = useGetAllAddedCoursesQuery(userName.id);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<string[] | undefined>();

  if (data) {
    const keys = Object.keys(data);
    // @ts-ignore later
    keys.forEach((key: any) => allCourses.push(data[key]));
  }

  const bannerName = {
    Стретчинг: cardStretching,
    Бодифлекс: cardBodyFlex,
    Йога: cardYoga,
    'Танцевальный фитнес': cardDanceFitness,
    'Степ-аэробика': cardStepAerobic,
  };

  const openMenu = (workouts: string[]) => {
    setOpen((prev) => !prev);
    if (workouts) { setSelectedCourse(workouts); }
  };

  return (
    <>
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
          {allCourses?.map(({ name, workouts }) => (
            <Styled.ProfileCourseItem key={name}>
              <Styled.ProfileCourseItemTitle>{name}</Styled.ProfileCourseItemTitle>
              <Styled.ProfileCourseItemImg
                alt="Card"
                src={`${bannerName[name as keyof typeof bannerName]}`}
              />
              <Styled.ProfileCourseItemButton>
                <ButtonGo
                  text="Перейти →"
                  type="button"
                  onClick={() => openMenu(workouts)}
                />
              </Styled.ProfileCourseItemButton>
            </Styled.ProfileCourseItem>
          ))}
          {open
            ? <SelectWorkout selectedCourse={selectedCourse} setOpen={setOpen} />
            : null}
        </Styled.ProfileCoursesList>
      </Styled.ProfileCourses>
    </>
  );
};
