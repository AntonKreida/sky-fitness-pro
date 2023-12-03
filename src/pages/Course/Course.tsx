import { useParams } from 'react-router-dom';
import { FC } from 'react';

import BannerYoga from '@assets/images/bannerYoga.svg';
import bannerStretching from '@assets/images/bannerStretching.svg';
import bannerBodyFlex from '@assets/images/bannerBodyFlex.svg';
import bannerDanceFitness from '@assets/images/bannerDanceFitness.svg';
import bannerStepAirobic from '@assets/images/bannerStepAirobic.svg';
import { ReactComponent as HandPhone } from '@assets/images/handPhone.svg';

import { Wrapper } from '../../layouts/wrapper/Wrapper';
import { useGetAllCoursesQuery } from '../../store/course-api';
import * as S from './course.styled';


export const Course: FC = () => {
  const params = useParams();
  const pageId = params.id;

  const { data } = useGetAllCoursesQuery(5);

  const allCourses: any[] = [];
  if (data) {
    const keys = Object.keys(data);
    keys.forEach((key: any) => allCourses.push(data[key]));
  }

  const coursePage = allCourses.filter((el) => el._id === pageId)[0];

  const handleImg = (name: string) => {
    switch (name) {
      case 'Стретчинг':
        return bannerStretching;
      case 'Бодифлекс':
        return bannerBodyFlex;
      case 'Йога':
        return BannerYoga;
      case 'Танцевальный фитнес':
        return bannerDanceFitness;
      case 'Степ-аэробика':
        return bannerStepAirobic;
      default:
        return null;
    }
  };

  return (
    <Wrapper>

      <S.CourseMain>
        <S.CourseContainer>
          <S.CourseBanner>
            <S.CourseTitle>{ coursePage?.nameRU }</S.CourseTitle>
            { /* <S.CourseImage alt="fitness" src={handleImg(coursePage?.nameRU)} /> */ }
          </S.CourseBanner>

          <S.CourseText>Подойдет для вас, если:</S.CourseText>
          <S.CourseAllPoints>
            { coursePage?.fitting.map((item: string, index: number) => (
              <S.CoursePoint key={ item }>
                <S.CourseBullet>{ index + 1 }</S.CourseBullet>
                <S.CoursePointText>{ item }</S.CoursePointText>
              </S.CoursePoint>
            )) }
          </S.CourseAllPoints>

          <S.CourseText>Направления:</S.CourseText>
          <S.CourseDirection>
            { coursePage?.directions.map((item: string) => <S.CourseDirPoint key={ item }>{ item }</S.CourseDirPoint>) }
          </S.CourseDirection>

          <S.CourseInfo>{ coursePage?.description }</S.CourseInfo>

          <S.CourseFooter>
            <HandPhone />
            <S.CourseFooterText>Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления и тренера, с которым тренировки принесут здоровье и радость!</S.CourseFooterText>
            <S.CourseFooterBtn type="submit" onClick={ () => alert('You are registered!') }>Записаться на тренировку</S.CourseFooterBtn>

          </S.CourseFooter>
        </S.CourseContainer>
      </S.CourseMain>

    </Wrapper>
  );
};
