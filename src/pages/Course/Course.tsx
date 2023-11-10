import React from 'react';
import { ReactComponent as BannerYoga } from '@assets/images/bannerYoga.svg';
import { ReactComponent as HandPhone } from '@assets/images/handPhone.svg';
import { ReactComponent as Logo } from '@assets/images/logoBlack.svg';

import * as S from './Course.styled';
import { MockData } from './MockData';


export const Course = () => {
  const pageNumber = 0;
  console.log(MockData[pageNumber].img);

  return (
    <S.CourseMain>

      <S.CourseLogo>
        <Logo />
      </S.CourseLogo>
      <S.CourseBtnEnterConteiner>
        <S.CourseBtnEnter type="submit">Войти</S.CourseBtnEnter>
      </S.CourseBtnEnterConteiner>

      <S.CourseContainer>
        <S.CourseBanner>
          <S.CourseTitle>{ MockData[pageNumber].nameRU }</S.CourseTitle>
          <BannerYoga />
        </S.CourseBanner>

        <S.CourseText>Подойдет для вас, если:</S.CourseText>
        <S.CourseAllPoints>
          { MockData[pageNumber].fitting.map((item) => (
            <S.CoursePoint key={ item.number }>
              <S.CourseBullet>{ item.number }</S.CourseBullet>
              <S.CoursePointText>{ item.text }</S.CoursePointText>
            </S.CoursePoint>
          )) }
        </S.CourseAllPoints>

        <S.CourseText>Направления:</S.CourseText>
        <S.CourseDirection>
          { MockData[pageNumber].directions.map((item) => <S.CourseDirPoint key={ item }>{ item }</S.CourseDirPoint>) }
        </S.CourseDirection>

        <S.CourseInfo>{ MockData[pageNumber].description }</S.CourseInfo>

        <S.CourseFooter>
          <HandPhone />
          <S.CourseFooterText>Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления и тренера, с которым тренировки принесут здоровье и радость!</S.CourseFooterText>
          <S.CourseFooterBtn type="submit">Записаться на тренировку</S.CourseFooterBtn>

        </S.CourseFooter>
      </S.CourseContainer>
    </S.CourseMain>
  );
};
