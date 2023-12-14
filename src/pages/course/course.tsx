import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Popup, LoaderFull } from '@components/';
import { useGetByCourseIdQuery, getStateUser, useGetAllWorkoutsQuery } from '@redux/';
import { Button } from '@shared/';
import { useAppSelector } from '@hook/';
import bannerStepAerobic from '@assets/images/banner-step-aerobic.svg';
import BannerYoga from '@assets/images/banner-yoga.svg';
import bannerStretching from '@assets/images/banner-stretching.svg';
import bannerBodyFlex from '@assets/images/banner-body-flex.svg';
import bannerDanceFitness from '@assets/images/banner-dance-fitness.svg';
import { ReactComponent as Phone } from '@assets/images/phone.svg';
import { patchAddCourse, patchAddWorkout } from '@api/';
import { IWorkout } from '@interface/';

import * as Styled from './course.styled';


export const Course = () => {
  const { id } = useParams();
  const [okPopupOpen, setOkPopupOpen] = useState<boolean>(false);

  const userName = useAppSelector(getStateUser);
  const { data: allCoursesById, isLoading } = useGetByCourseIdQuery(id as string);
  const { data: workoutsData } = useGetAllWorkoutsQuery(20);

  const allWorkoutsFix: IWorkout[] = [];

  if (workoutsData) {
    const keys = Object.keys(workoutsData);
    // @ts-ignore later
    keys.forEach((key: any) => allWorkoutsFix.push(workoutsData[key]));
  }

  const workoutBySelectedCourse = allWorkoutsFix?.filter((i) => allCoursesById?.workouts?.includes(i._id));

  const workoutBySelectedCourseSend = workoutBySelectedCourse
    .reduce((object, workout) => ({ ...object, [workout._id]: workout }), {});


  const bannerName = {
    Стретчинг: bannerStretching,
    Бодифлекс: bannerBodyFlex,
    Йога: BannerYoga,
    'Танцевальный фитнес': bannerDanceFitness,
    'Степ-аэробика': bannerStepAerobic,
  };

  const handlerOnClickAddCourse = async () => {
    const dataForRequest = {
      [`${allCoursesById?._id}`]: {
        name: allCoursesById?.nameRU,
        workouts: allCoursesById?.workouts as string[],
      }
    };

    try {
      await patchAddCourse(dataForRequest, userName?.id as string);
      // @ts-ignore later
      await patchAddWorkout(workoutBySelectedCourseSend, userName.id as string);
      setOkPopupOpen(true);

      setTimeout(() => {
        setOkPopupOpen(false);
      }, 2000);
    } catch {
      setOkPopupOpen(false);
    }
  };


  return (
    <Styled.CourseContainer>
      { isLoading ? <LoaderFull /> : (
        <>
          { okPopupOpen
            ? (
              <Popup
                text="Вы успешно подписались на курс!"
              />
            )
            : null }
          <Styled.CourseBanner>
            <Styled.CourseTitle>{ allCoursesById?.nameRU }</Styled.CourseTitle>
            <Styled.CourseImage alt="fitness" src={ `${bannerName[allCoursesById?.nameRU as keyof typeof bannerName]}` } />
          </Styled.CourseBanner>

          <Styled.CourseBlock>
            <Styled.CourseText>Подойдет для вас, если:</Styled.CourseText>
            <Styled.CourseAllPoints>
              { allCoursesById?.fitting.map((item: string, index: number) => (
                <Styled.CoursePoint key={ item }>
                  <Styled.CourseBullet>{ index + 1 }</Styled.CourseBullet>
                  <Styled.CoursePointText>{ item }</Styled.CoursePointText>
                </Styled.CoursePoint>
              )) }
            </Styled.CourseAllPoints>
          </Styled.CourseBlock>

          <Styled.CourseBlock>
            <Styled.CourseText>Направления:</Styled.CourseText>
            <Styled.CourseDirection>
              { allCoursesById?.directions.map((item: string) => (
                <Styled.CourseDirPoint
                  key={ item }
                >
                  { item }
                </Styled.CourseDirPoint>
              )) }
            </Styled.CourseDirection>
          </Styled.CourseBlock>

          <Styled.CourseInfo>{ allCoursesById?.description }</Styled.CourseInfo>

          <Styled.CourseFooter>
            <Styled.CourseFooterMain>
              <Styled.CourseFooterText> Оставьте заявку на пробное занятие,
                мы свяжемся с вами, поможем с выбором направления и тренера,
                с которым тренировки принесут здоровье и радость!
              </Styled.CourseFooterText>
              <Button
                text="Записаться на тренировку"
                type="button"
                onClick={ handlerOnClickAddCourse }
              />
            </Styled.CourseFooterMain>
            <Phone />
          </Styled.CourseFooter>
        </>
      ) }
    </Styled.CourseContainer>
  );
};
