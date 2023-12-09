import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetByCourseIdQuery } from '@redux/';
import bannerStepAerobic from '@assets/images/banner-step-aerobic.svg';
import BannerYoga from '@assets/images/banner-yoga.svg';
import bannerStretching from '@assets/images/banner-stretching.svg';
import bannerBodyFlex from '@assets/images/banner-body-flex.svg';
import bannerDanceFitness from '@assets/images/banner-dance-fitness.svg';

import { Popup } from '../../components/main-content/ui/pop-up/pop-up';
import { ReactComponent as Phone } from '../../assets/images/phone.svg';
import { Button } from '../../shared/button/button';
import * as Styled from './course.styled';


export const Course = () => {
  const [okPopupOpen, setOkPopupOpen] = useState<boolean>(false);

  const params = useParams();
  const pageId = params.id;

  const { data, isLoading } = useGetByCourseIdQuery(pageId as string);

  const bannerName = {
    Стретчинг: bannerStretching,
    Бодифлекс: bannerBodyFlex,
    Йога: BannerYoga,
    'Танцевальный фитнес': bannerDanceFitness,
    'Степ-аэробика': bannerStepAerobic,
  };


  const popUpEvent = () => {
    setOkPopupOpen(true);

    setTimeout(() => {
      setOkPopupOpen(false);
    }, 2000);
  };


  return (
    <Styled.CourseContainer>
      { isLoading ? <p>Загрузка...</p> : (
        <>
          { okPopupOpen
            ? <Popup text="Вы успешно подписались на курс!" />
            : null }
          <Styled.CourseBanner>
            <Styled.CourseTitle>{ data?.nameRU }</Styled.CourseTitle>
            <Styled.CourseImage alt="fitness" src={ `${bannerName[data?.nameRU as keyof typeof bannerName]}` } />
          </Styled.CourseBanner>

          <Styled.CourseBlock>
            <Styled.CourseText>Подойдет для вас, если:</Styled.CourseText>
            <Styled.CourseAllPoints>
              { data?.fitting.map((item: string, index: number) => (
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
              { data?.directions.map((item: string) => (
                <Styled.CourseDirPoint
                  key={ item }
                >
                  { item }
                </Styled.CourseDirPoint>
              )) }
            </Styled.CourseDirection>
          </Styled.CourseBlock>

          <Styled.CourseInfo>{ data?.description }</Styled.CourseInfo>

          <Styled.CourseFooter>
            <Styled.CourseFooterMain>
              <Styled.CourseFooterText> Оставьте заявку на пробное занятие,
                мы свяжемся с вами, поможем с выбором направления и тренера,
                с которым тренировки принесут здоровье и радость!
              </Styled.CourseFooterText>
              <Button
                text="Записаться на тренировку"
                type="submit"
                onClick={ popUpEvent }
              />
            </Styled.CourseFooterMain>
            <Phone />
          </Styled.CourseFooter>
        </>
      ) }
    </Styled.CourseContainer>
  );
};
