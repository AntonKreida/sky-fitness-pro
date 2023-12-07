import { useParams } from 'react-router-dom';

import { useGetAllCoursesQuery } from '@redux/';
import bannerStepAerobic from '@assets/images/banner-step-aerobic.svg';
import BannerYoga from '@assets/images/banner-yoga.svg';
import bannerStretching from '@assets/images/banner-stretching.svg';
import bannerBodyFlex from '@assets/images/banner-body-flex.svg';
import bannerDanceFitness from '@assets/images/banner-dance-fitness.svg';
import { ICourse } from '@/interface';

import { ReactComponent as Phone } from '../../assets/images/phone.svg';
import { Button } from '../../shared/button/button';
import * as Styled from './course.styled';


export const Course = () => {
  const params = useParams();
  const pageId = params.id;

  const { data } = useGetAllCoursesQuery(5);

  const allCourses: ICourse[] = [];
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
        return bannerStepAerobic;
      default:
        return null;
    }
  };

  return (
    <Styled.CourseContainer>
      <Styled.CourseBanner>
        <Styled.CourseTitle>{coursePage?.nameRU}</Styled.CourseTitle>
        <Styled.CourseImage alt="fitness" src={`${handleImg(coursePage?.nameRU)}`} />
      </Styled.CourseBanner>

      <Styled.CourseBlock>
        <Styled.CourseText>Подойдет для вас, если:</Styled.CourseText>
        <Styled.CourseAllPoints>
          {coursePage?.fitting.map((item: string, index: number) => (
            <Styled.CoursePoint key={item}>
              <Styled.CourseBullet>{index + 1}</Styled.CourseBullet>
              <Styled.CoursePointText>{item}</Styled.CoursePointText>
            </Styled.CoursePoint>
          ))}
        </Styled.CourseAllPoints>
      </Styled.CourseBlock>

      <Styled.CourseBlock>
        <Styled.CourseText>Направления:</Styled.CourseText>
        <Styled.CourseDirection>
          {coursePage?.directions.map((item: string) => (
            <Styled.CourseDirPoint
              key={item}
            >
              {item}
            </Styled.CourseDirPoint>
          ))}
        </Styled.CourseDirection>
      </Styled.CourseBlock>

      <Styled.CourseInfo>{coursePage?.description}</Styled.CourseInfo>

      <Styled.CourseFooter>
        <Styled.CourseFooterMain>
          <Styled.CourseFooterText> Оставьте заявку на пробное занятие,
            мы свяжемся с вами, поможем с выбором направления и тренера,
            с которым тренировки принесут здоровье и радость!
          </Styled.CourseFooterText>
          <Button
            text="Записаться на тренировку"
            type="submit"
            onClick={() => alert('You are registered!')}
          />
        </Styled.CourseFooterMain>
        <Phone />
      </Styled.CourseFooter>

    </Styled.CourseContainer>
  );
};
