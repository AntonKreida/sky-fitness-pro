import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Container } from '@layouts/';
import { ReactComponent as SaleSticker } from '@assets/images/sale-sticker.svg';
import cardBodyFlex from '@assets/images/card-body-flex.png';
import cardAerobic from '@assets/images/card-aerobics.png';
import cardDancingFit from '@assets/images/card-dancing-fit.png';
import cardStretching from '@assets/images/card-stretching.png';
import cardYoga from '@assets/images/card-yoga.png';
import { useGetAllCoursesQuery } from '@redux/';
import { ICourse } from '@/interface';
import { LoaderFull } from '@components/';

import * as Styled from './home-page.styled';


const bannerName = {
  Стретчинг: cardStretching,
  Бодифлекс: cardBodyFlex,
  Йога: cardYoga,
  'Танцевальный фитнес': cardDancingFit,
  'Степ-аэробика': cardAerobic,
};

export const HomePage = () => {
  const { data, isLoading } = useGetAllCoursesQuery(5);

  const navigate = useNavigate();
  const [courses, setCourses] = useState<ICourse[]>([]);

  useEffect(() => {
    if (data) {
      const keys = Object.keys(data);
      keys.forEach((key: string) => {
        // @ts-ignore key
        setCourses((prev) => prev.concat(data[key]));
      });
    }
  }, [data]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container>
      <Styled.DescriptionContainer>
        <Styled.DescriptionText>
          <Styled.Paragraph>Онлайн-тренировки для занятий дома</Styled.Paragraph>
          <Styled.Title> Начните заниматься спортом и улучшите качество жизни</Styled.Title>
        </Styled.DescriptionText>
        <Styled.SaleStickerContainer>
          <SaleSticker />
          <Styled.SaleStickerTitle>Измени своё <br /> тело за полгода</Styled.SaleStickerTitle>
        </Styled.SaleStickerContainer>
      </Styled.DescriptionContainer>
      { isLoading
        ? (<LoaderFull />
        )
        : (
          <Styled.CardsContainer>
            { courses?.map((card) => (
              <Styled.CardContainer
                key={ card._id }
                onClick={ () => {
                  navigate(`/sky-fitness-pro/${card._id}`);
                } }
              >
                <Styled.CardImage alt="fitness" src={ `${bannerName[card.nameRU as keyof typeof bannerName]}` } />
                <Styled.CardTitle>{ card.nameRU }</Styled.CardTitle>

              </Styled.CardContainer>
            )) }
          </Styled.CardsContainer>
        ) }

      <Styled.Anchor onClick={ scrollToTop }>Наверх <span>↑</span> </Styled.Anchor>
    </Container>
  );
};
