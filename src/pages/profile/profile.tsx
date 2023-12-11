import { useState } from 'react';

import { Button, ButtonGo } from '@shared/';
import cardStepAerobic from '@assets/images/card-aerobics.png';
import cardYoga from '@assets/images/card-yoga.png';
import cardStretching from '@assets/images/card-stretching.png';
import cardBodyFlex from '@assets/images/card-body-flex.png';
import cardDanceFitness from '@assets/images/card-dancing-fit.png';
import { useAppSelector } from '@hook/';
import { SelectWorkout } from '@components/';
import { patchAddWorkout } from '@api/';
import { getUser, useGetAllAddedCoursesQuery, useGetAllWorkoutsQuery } from '@redux/';

import * as Styled from './profile.styled';


interface AddedCourse {
  name: string;
  workouts: string[];
}

export const Profile = () => {
  const userName = useAppSelector(getUser);

  const allCourses: AddedCourse[] = [];

  // @ts-ignore later
  const { data: courses } = useGetAllAddedCoursesQuery(userName.id);
  const { data: workoutsData } = useGetAllWorkoutsQuery(20);
  const AllWorkouts = workoutsData;

  const [open, setOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<string[] | undefined>();

  if (courses) {
    const keys = Object.keys(courses);
    // @ts-ignore later
    keys.forEach((key: any) => allCourses.push(courses[key]));
  }
  const bannerName = {
    Стретчинг: cardStretching,
    Бодифлекс: cardBodyFlex,
    Йога: cardYoga,
    'Танцевальный фитнес': cardDanceFitness,
    'Степ-аэробика': cardStepAerobic,
  };

  const openMenu = async (workouts: string[]) => {
    try {
      // @ts-ignore later
      await patchAddWorkout(AllWorkouts, userName.id as string);
    } catch {
      console.error('error');
    }

    setOpen((prev) => !prev);
    if (workouts) { setSelectedCourse(workouts); }
  };

  return (
    <>
      <Styled.Profile>
        <Styled.ProfileTitle>Мой профиль</Styled.ProfileTitle>
        <Styled.ProfileInfo>
          <Styled.ProfileText>Ваш логин: { userName.email }</Styled.ProfileText>
        </Styled.ProfileInfo>
        <Styled.ProfileButtons>
          <Button text="Редактировать логин" type="button" onClick={ () => console.log('Click change login') } />
          <Button text="Редактировать пароль" type="button" onClick={ () => console.log('Click change password') } />
        </Styled.ProfileButtons>
      </Styled.Profile>
      <Styled.ProfileCourses>
        <Styled.ProfileTitle>Мои курсы</Styled.ProfileTitle>
        <Styled.ProfileCoursesList>
          { allCourses?.map(({ name, workouts }) => (
            <Styled.ProfileCourseItem key={ name }>
              <Styled.ProfileCourseItemTitle>{ name }</Styled.ProfileCourseItemTitle>
              <Styled.ProfileCourseItemImg
                alt="Card"
                src={ `${bannerName[name as keyof typeof bannerName]}` }
              />
              <Styled.ProfileCourseItemButton>
                <ButtonGo
                  text="Перейти →"
                  type="button"
                  onClick={ () => openMenu(workouts) }
                />
              </Styled.ProfileCourseItemButton>
            </Styled.ProfileCourseItem>
          )) }
          { open
            ? <SelectWorkout selectedCourse={ selectedCourse } setOpen={ setOpen } />
            : null }
        </Styled.ProfileCoursesList>
      </Styled.ProfileCourses>
    </>
  );
};
