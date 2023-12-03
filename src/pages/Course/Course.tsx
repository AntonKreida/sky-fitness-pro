import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ICourse } from '@interface/';
import { useGetAllCoursesQuery } from '@redux/';
import { ReactComponent as HandPhone } from '@assets/images/hand-phone.svg';
import bannerStepAerobic from '@assets/images/banner-step-aerobic.svg';
import BannerYoga from '@assets/images/banner-yoga.svg';
import bannerStretching from '@assets/images/banner-stretching.svg';
import bannerBodyFlex from '@assets/images/banner-body-flex.svg';
import bannerDanceFitness from '@assets/images/banner-dance-fitness.svg';

import * as S from './course.styled';


export const Course = () => {
  const params = useParams();
  const pageId = params.id;

  const { data } = useGetAllCoursesQuery(5);

  const [allCourses, setAllCourses] = useState<ICourse[]>([]);


  useEffect(() => {
    if (data) {
      const keys = Object.keys(data);

      keys.forEach((key: keyof typeof data) => {
        setAllCourses((prev) => prev.concat(data[key]));
      });
    }
  }, [data]);


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
        return bannerStepAerobic;
      default:
        return null;
    }
  };

  return (
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
        <S.CourseFooterText>Оставьте заявку на пробное занятие,
          мы свяжемся с вами, поможем с выбором направления и тренера,
          с которым тренировки принесут здоровье и радость!
        </S.CourseFooterText>
        <S.CourseFooterBtn type="submit" onClick={ () => alert('You are registered!') }>Записаться на тренировку</S.CourseFooterBtn>

      </S.CourseFooter>
    </S.CourseContainer>
  );
};
