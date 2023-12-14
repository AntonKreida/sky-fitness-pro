import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

import { LoaderFull, SelectWorkout } from '@components/';
import { Button, ButtonGo } from '@shared/';
import cardStepAerobic from '@assets/images/card-aerobics.png';
import cardYoga from '@assets/images/card-yoga.png';
import cardStretching from '@assets/images/card-stretching.png';
import cardBodyFlex from '@assets/images/card-body-flex.png';
import cardDanceFitness from '@assets/images/card-dancing-fit.png';
import { useAppSelector } from '@hook/';
import { getStateUser, useGetAllAddedCoursesQuery } from '@redux/';

import * as Styled from './profile.styled';


interface AddedCourse {
  name: string;
  workouts: string[];
}

const bannerName = {
  Стретчинг: cardStretching,
  Бодифлекс: cardBodyFlex,
  Йога: cardYoga,
  'Танцевальный фитнес': cardDanceFitness,
  'Степ-аэробика': cardStepAerobic,
};

export const Profile = () => {
  const navigate = useNavigate();
  const userName = useAppSelector(getStateUser);

  const { data: userCourses, isLoading } = useGetAllAddedCoursesQuery(userName.id as string);

  const [open, setOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<string[] | undefined>();
  const [coursesData, setCoursesData] = useState<AddedCourse[]>([]);

  useEffect(() => {
    if (userCourses) {
      const keys = Object.keys(userCourses);
      keys.forEach((key: string) => {
        // @ts-ignore key
        setCoursesData((prev) => prev.concat(userCourses[key]));
      });
    }
  }, [userCourses]);

  const openMenu = async (workouts: string[]) => {
    setOpen((prev) => !prev);
    if (workouts) setSelectedCourse(workouts);
  };

  return (
    <>
      <Styled.Profile>
        <Styled.ProfileTitle>Мой профиль</Styled.ProfileTitle>
        <Styled.ProfileInfo>
          <Styled.ProfileText>Ваш логин: { userName.email }</Styled.ProfileText>
        </Styled.ProfileInfo>
        <Styled.ProfileButtons>
          <Button
            text="Редактировать логин"
            type="button"
            onClick={ () => navigate('/sky-fitness-pro/change-data-login', { replace: true }) }
          />
          <Button
            text="Редактировать пароль"
            type="button"
            onClick={ () => navigate('/sky-fitness-pro/change-data-password', { replace: true }) }
          />
        </Styled.ProfileButtons>
      </Styled.Profile>
      { isLoading
        ? <LoaderFull />
        : (
          <Styled.ProfileCourses>
            <Styled.ProfileTitle>Мои курсы</Styled.ProfileTitle>
            { coursesData.length === 0
              ? (
                <>
                  <Styled.ProfileText>Вы пока не добавили ни одного курса :( <br />
                    Перейдите по ссылке ниже, чтобы выбрать курсы!
                  </Styled.ProfileText>
                  <Styled.ProfileContainerForLink
                    onClick={ () => navigate('/sky-fitness-pro', { replace: true }) }
                  >
                    <Styled.ProfileLink> Все курсы </Styled.ProfileLink>
                    <Styled.ProfileLink>
                      <MdKeyboardDoubleArrowRight />
                    </Styled.ProfileLink>
                  </Styled.ProfileContainerForLink>

                </>
              )
              : (
                <Styled.ProfileCoursesList>
                  { coursesData?.map(({ name, workouts }) => (
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
              ) }

          </Styled.ProfileCourses>
        ) }

    </>
  );
};
